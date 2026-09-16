import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { supabase } from "../../lib/supabase";
import EventForm from "../../components/layout/EventForm";

const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    event_type: "Daehwa Cafe Community",
    date: "",
    location: "Delhi",
    category: "",
    description: "",
    tags: "",
  });

  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // -----------------------------
  // Fetch Event
  // -----------------------------
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        setError("");

        const { data, error: fetchError } = await supabase
          .from("events")
          .select("*")
          .eq("id", id)
          .single();

        if (fetchError) {
          throw fetchError;
        }

        if (!data) {
          throw new Error("Event not found.");
        }

        setFormData({
          title: data.title || "",
          event_type: data.event_type || "Daehwa Cafe Community",
          date: data.date || "",
          location: data.location || "Delhi",
          category: data.category || "",
          description: data.description || "",
          tags: Array.isArray(data.tags)
            ? data.tags.join(", ")
            : data.tags || "",
        });

        setImages(Array.isArray(data.images) ? data.images : []);

        setVideo(data.video || null);
      } catch (err) {
        console.error("Error fetching event:", err);

        setError(
          err.message || "Something went wrong while loading the event."
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  // -----------------------------
  // Form Change
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  // -----------------------------
  // Image Selection
  // -----------------------------
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (!selectedFiles.length) return;

    setImages((prevImages) => {
      const remainingSlots = 5 - prevImages.length;

      const filesToAdd = selectedFiles.slice(0, remainingSlots);

      if (selectedFiles.length > remainingSlots) {
        setError("You can upload a maximum of 5 images.");
      } else {
        setError("");
      }

      return [...prevImages, ...filesToAdd];
    });

    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  // -----------------------------
  // Remove Image
  // -----------------------------
  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );

    setError("");
  };

  // -----------------------------
  // Video Selection
  // -----------------------------
  const handleVideoChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    setVideo(selectedFile);
    setError("");

    // Reset input so the same file can be selected again
    e.target.value = "";
  };

  // -----------------------------
  // Remove Video
  // -----------------------------
  const handleRemoveVideo = () => {
    setVideo(null);
    setError("");
  };

  // -----------------------------
  // Upload File to Cloudinary
  // -----------------------------
  const uploadToCloudinary = async (file, folder) => {
    const uploadData = new FormData();

    uploadData.append("file", file);
    uploadData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    uploadData.append("folder", folder);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: uploadData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();

      console.error("Cloudinary error:", errorData);

      throw new Error(
        errorData?.error?.message || "Cloudinary upload failed."
      );
    }

    const data = await response.json();

    return data.secure_url;
  };

  // -----------------------------
  // Submit Event
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // -----------------------------
      // Validate Required Fields
      // -----------------------------

      if (!formData.title.trim()) {
        throw new Error("Please enter an event title.");
      }

      if (!formData.event_type) {
        throw new Error("Please select an event type.");
      }

      if (!formData.date) {
        throw new Error("Please select an event date.");
      }

      if (!formData.location.trim()) {
        throw new Error("Please enter an event location.");
      }

      if (!formData.category.trim()) {
        throw new Error("Please enter an event category.");
      }

      if (!formData.description.trim()) {
        throw new Error("Please enter an event description.");
      }

      // -----------------------------
      // Convert Tags to Array
      // -----------------------------

      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      if (tagsArray.length === 0) {
        throw new Error("Please add at least one tag.");
      }

      // -----------------------------
      // Validate Images
      // -----------------------------

      if (images.length === 0) {
        throw new Error("Please keep at least one event image.");
      }

      if (images.length > 5) {
        throw new Error("You can upload a maximum of 5 images.");
      }

      // -----------------------------
      // Create Cloudinary Folder
      // -----------------------------

      const eventFolder = `daehwacafe/${formData.title
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-_]/g, "")}`;

      // -----------------------------
      // Upload Only New Images
      // -----------------------------

      const imageUrls = await Promise.all(
        images.map(async (image) => {
          if (typeof image === "string") {
            return image;
          }

          return uploadToCloudinary(image, eventFolder);
        })
      );

      // -----------------------------
      // Handle Video
      // -----------------------------

      let videoUrl = null;

      if (video) {
        if (typeof video === "string") {
          // Keep existing video URL
          videoUrl = video;
        } else {
          // Upload newly selected video
          videoUrl = await uploadToCloudinary(video, eventFolder);
        }
      }

      // -----------------------------
      // Prepare Updated Event Data
      // -----------------------------

      const eventData = {
        title: formData.title.trim(),
        event_type: formData.event_type,
        date: formData.date,
        location: formData.location.trim(),
        category: formData.category.trim(),
        description: formData.description.trim(),
        tags: tagsArray,
        images: imageUrls,
        video: videoUrl,
      };

      // -----------------------------
      // Update Supabase
      // -----------------------------

      const { data: updatedEvent, error: updateError } = await supabase
        .from("events")
        .update(eventData)
        .eq("id", id)
        .select()
        .single();

      if (updateError) {
        throw updateError;
      }

      if (!updatedEvent) {
        throw new Error(
          "The event was not updated. Check the Supabase UPDATE policy."
        );
      }

      // -----------------------------
      // Go Back to Manage Events
      // -----------------------------

      navigate("/admin/events");
    } catch (err) {
      console.error("Error updating event:", err);

      setError(
        err.message || "Something went wrong while updating the event."
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Loading State
  // -----------------------------
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(246,237,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#f6efff_48%,_#efe4ff_100%)] px-6 py-12">
        <p className="text-sm font-medium text-stone-600">
          Loading event...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(246,237,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#f6efff_48%,_#efe4ff_100%)] px-6 py-12 text-stone-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-500" />
            Event Studio
          </span>

          <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-stone-950 sm:text-5xl">
            Edit Event
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
            Update the details of your Daehwa Cafe event.
          </p>
        </div>

        {/* Event Form */}
        <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_rgba(91,33,182,0.08)] backdrop-blur sm:p-10">
          <EventForm
            formData={formData}
            handleChange={handleChange}
            images={images}
            video={video}
            handleImageChange={handleImageChange}
            handleVideoChange={handleVideoChange}
            removeImage={handleRemoveImage}
            removeVideo={handleRemoveVideo}
            loading={loading}
            error={error}
            onSubmit={handleSubmit}
            onCancel={() => navigate("/admin/events")}
            submitText="Update Event"
          />
        </div>
      </div>
    </div>
  );
};

export default EditEvent;