import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

import { supabase } from "../../lib/supabase";
import FormField from "../../components/layout/FormField";

const CLOUDINARY_CLOUD_NAME = "qohhuivq";
const CLOUDINARY_UPLOAD_PRESET = "DaehwaCafe";

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

  // Existing image URLs + newly selected File objects
  const [images, setImages] = useState([]);

  // Existing video URL OR newly selected File
  const [video, setVideo] = useState(null);

  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // -----------------------------
  // Fetch Event
  // -----------------------------
  useEffect(() => {
    const fetchEvent = async () => {
      setInitialLoading(true);
      setError("");

      try {
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
          tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
        });

        setImages(Array.isArray(data.images) ? data.images : []);

        setVideo(data.video || null);
      } catch (err) {
        console.error("Error fetching event:", err);

        setError(
          err.message || "Something went wrong while loading the event."
        );
      } finally {
        setInitialLoading(false);
      }
    };

    if (id) {
      fetchEvent();
    }
  }, [id]);

  // -----------------------------
  // Handle Form Changes
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
        setError("You can have a maximum of 5 images.");
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

    if (!selectedFile) return;

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
  // Upload to Cloudinary
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
  // Submit Update
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
        throw new Error("You can have a maximum of 5 images.");
      }

      // -----------------------------
      // Create Cloudinary Folder
      // -----------------------------

      const eventFolder = `daehwacafe/${formData.title
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-_]/g, "")}`;

      // -----------------------------
      // Upload New Images
      // Keep Existing URLs
      // -----------------------------

      const imageUrls = await Promise.all(
        images.map(async (image) => {
          // Existing Cloudinary URL
          if (typeof image === "string") {
            return image;
          }

          // Newly selected File
          return await uploadToCloudinary(image, eventFolder);
        })
      );

      // -----------------------------
      // Handle Video
      // -----------------------------

      let videoUrl = null;

      if (video) {
        // Existing Cloudinary URL
        if (typeof video === "string") {
          videoUrl = video;
        } else {
          // Newly selected File
          videoUrl = await uploadToCloudinary(video, eventFolder);
        }
      }

      // -----------------------------
      // Prepare Updated Event
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

      console.log("Updating event with:", eventData);
      console.log("Event ID:", id);

      // -----------------------------
      // Update Supabase
      // -----------------------------

      const { data: updatedEvent, error: updateError } = await supabase
        .from("events")
        .update(eventData)
        .eq("id", id)
        .select();

      if (updateError) {
        throw updateError;
      }

      console.log("Updated rows:", updatedEvent);

      if (!updatedEvent || updatedEvent.length === 0) {
        throw new Error(
          "The event was not updated. Check the Supabase UPDATE policy."
        );
      }

      // -----------------------------
      // Back to Manage Events
      // -----------------------------

      navigate("/admin/events");
    } catch (err) {
      console.error("Error updating event:", err);

      setError(
        err.message ||
        "Something went wrong while updating the event."
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Initial Loading Screen
  // -----------------------------
  if (initialLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(246,237,255,0.95),_transparent_38%),linear-gradient(180deg,_#fffdfd_0%,_#f6efff_48%,_#efe4ff_100%)] px-6">
        <div className="text-center">
          <p className="text-sm font-semibold text-violet-700">
            Loading event...
          </p>

          <p className="mt-2 text-sm text-stone-500">
            Please wait while we load the event details.
          </p>
        </div>
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
            Update the details and media for this Daehwa Cafe event.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm font-medium text-rose-700">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-7 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_rgba(91,33,182,0.08)] backdrop-blur sm:p-10"
        >

          {/* Event Title */}
          <FormField
            label="Event Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
            required
          />

          {/* Event Type */}
          <FormField
            label="Event Type"
            name="event_type"
            type="select"
            value={formData.event_type}
            onChange={handleChange}
            required
          >
            <option value="Daehwa Cafe Community">
              Daehwa Cafe Community
            </option>

            <option value="Daehwa Cafe Talkroom">
              Daehwa Cafe Talkroom
            </option>
          </FormField>

          {/* Date */}
          <FormField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Location */}
          <FormField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter event location"
            required
          />

          {/* Category */}
          <FormField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g. Workshop, Cultural Event"
            required
          />

          <p className="-mt-5 text-xs text-stone-500">
            Add the category that best describes the event.
          </p>

          {/* Description */}
          <FormField
            label="Description"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the event..."
            rows={6}
            required
          />

          {/* Tags */}
          <FormField
            label="Tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Korea, Culture, Community, Workshop"
            required
          />

          <p className="-mt-4 text-xs text-gray-500">
            Add relevant topics or keywords, separated by commas.
          </p>

          {/* Images */}
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-900">
              Event Images
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              disabled={images.length >= 5}
              className="block w-full cursor-pointer rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 px-4 py-3 text-sm font-medium text-stone-600 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-violet-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-violet-400 file:hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
            />

            <div className="mt-2 flex items-center justify-between gap-4">
              <p className="text-xs text-stone-500">
                Keep 1 to 5 images. You can remove existing images or add new
                ones.
              </p>

              <p className="text-xs font-semibold text-violet-600">
                {images.length}/5 images
              </p>
            </div>

            {/* Image Preview */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {images.map((image, index) => {
                  const imageSrc =
                    typeof image === "string"
                      ? image
                      : URL.createObjectURL(image);

                  return (
                    <div
                      key={`${typeof image === "string" ? image : image.name}-${index}`}
                      className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white/70 shadow-sm"
                    >
                      <img
                        src={imageSrc}
                        alt={`Event image ${index + 1}`}
                        className="h-32 w-full object-cover"
                      />

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        aria-label={`Remove image ${index + 1}`}
                        title="Remove image"
                        className="absolute right-2 top-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-lg font-medium leading-none text-white transition"
                      >
                        <IoCloseCircle
                          aria-hidden="true"
                          size={26}
                          className="rounded bg-red-600 text-red-200 hover:bg-red-700"
                        />
                      </button>

                      <p className="truncate px-3 py-2 text-xs text-stone-500">
                        {typeof image === "string"
                          ? "Existing image"
                          : image.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Video */}
          <div>
            <label className="mb-2 block text-sm font-bold text-stone-900">
              Event Video

              <span className="ml-2 text-xs font-medium uppercase tracking-[0.12em] text-stone-400">
                (Optional)
              </span>
            </label>

            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="block w-full cursor-pointer rounded-2xl border border-dashed border-violet-200 bg-violet-50/60 px-4 py-3 text-sm font-medium text-stone-600 file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-violet-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-violet-400 file:hover:bg-violet-800"
            />

            <p className="mt-2 text-xs text-stone-500">
              Keep the existing video, replace it with a new one, or remove
              it.
            </p>

            {video && (
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-violet-100 bg-white/70 p-3 shadow-sm">
                <p className="truncate text-sm text-stone-600">
                  {typeof video === "string"
                    ? "Existing event video"
                    : video.name}
                </p>

                <button
                  type="button"
                  onClick={handleRemoveVideo}
                  className="shrink-0 cursor-pointer rounded-full px-3 py-1 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 hover:text-rose-800"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 border-t border-violet-100 pt-7">
            <button
              type="button"
              onClick={() => navigate("/admin/events")}
              disabled={loading}
              className="cursor-pointer rounded-full border border-violet-200 bg-white/70 px-6 py-3 font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(124,58,237,0.22)] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;