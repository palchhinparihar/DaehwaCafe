import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

import { supabase } from "../lib/supabase";
import FormField from "../components/common/FormField";

const CLOUDINARY_CLOUD_NAME = "qohhuivq";
const CLOUDINARY_UPLOAD_PRESET = "DaehwaCafe";

const AddEvent = () => {
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setVideo(null);
      return;
    }

    setVideo(selectedFile);
    setError("");
  };

  // -----------------------------
  // Upload file to Cloudinary
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
      throw new Error("Cloudinary upload failed.");
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
      if (images.length > 5) {
        throw new Error("You can upload a maximum of 5 images.");
      }

      if (!formData.title.trim()) {
        throw new Error("Please enter an event title.");
      }

      if (!formData.date) {
        throw new Error("Please select an event date.");
      }

      if (!formData.description.trim()) {
        throw new Error("Please enter an event description.");
      }

      // Create folder name from event title
      const eventFolder = `daehwacafe/${formData.title
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-_]/g, "")}`;

      // -----------------------------
      // Upload Images
      // -----------------------------
      const imageUrls = await Promise.all(
        images.map((image) =>
          uploadToCloudinary(image, eventFolder)
        )
      );

      // -----------------------------
      // Upload Video
      // -----------------------------
      let videoUrl = null;

      if (video) {
        videoUrl = await uploadToCloudinary(video, eventFolder);
      }

      // -----------------------------
      // Convert tags to array
      // -----------------------------
      const tagsArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean);

      // -----------------------------
      // Save event to Supabase
      // -----------------------------
      const eventData = {
        title: formData.title.trim(),
        event_type: formData.event_type,
        date: formData.date,
        location: formData.location.trim(),
        category: formData.category.trim() || null,
        description: formData.description.trim(),
        tags: tagsArray.length > 0 ? tagsArray : null,
        images: imageUrls.length > 0 ? imageUrls : null,
        video: videoUrl,
      };

      const { error: insertError } = await supabase
        .from("events")
        .insert([eventData]);

      if (insertError) {
        throw insertError;
      }

      // Go back to Manage Events
      navigate("/admin/events");
    } catch (err) {
      console.error("Error adding event:", err);

      setError(
        err.message || "Something went wrong while adding the event."
      );
    } finally {
      setLoading(false);
    }
  };

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
            Add Event
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-700">
            Create a new Daehwa Cafe event.
          </p>
        </div>

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
            optional
          />

          <p className="-mt-5 text-xs text-stone-500">
            Add one category that describes the event type.
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
            optional
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
                Upload up to 5 images.
              </p>

              <p className="text-xs font-semibold text-violet-600">
                {images.length}/5 images selected
              </p>
            </div>

            {/* Image Preview */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {images.map((image, index) => (
                  <div
                    key={`${image.name}-${index}`}
                    className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white/70 shadow-sm"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Event preview ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      aria-label={`Remove ${image.name}`}
                      className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-lg font-medium leading-none text-white transition cursor-pointer"
                    >
                      <IoCloseCircle aria-hidden="true" size={26} className="text-red-200 bg-red-600 hover:bg-red-700 rounded" />
                    </button>

                    <p className="truncate px-3 py-2 text-xs text-stone-500">
                      {image.name}
                    </p>
                  </div>
                ))}
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
              Upload one event video.
            </p>

            {video && (
              <div className="mt-4 rounded-2xl border border-violet-100 bg-white/70 p-3 shadow-sm">
                <p className="truncate text-sm text-stone-600">
                  {video.name}
                </p>
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm font-medium text-rose-700">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 border-t border-violet-100 pt-7">
            <button
              type="button"
              onClick={() => navigate("/admin/events")}
              disabled={loading}
              className="rounded-full cursor-pointer border border-violet-200 bg-white/70 px-6 py-3 font-semibold text-violet-700 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full cursor-pointer bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_12px_24px_rgba(124,58,237,0.22)] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Uploading & Adding..." : "Add Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;