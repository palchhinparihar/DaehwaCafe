import { useEffect, useState } from "react";
import {
  FiImage,
  FiPlus,
  FiUploadCloud,
  FiVideo,
  FiX,
} from "react-icons/fi";
import FormField from "./FormField";

const EventForm = ({
  formData,
  handleChange,
  images,
  video,
  handleImageChange,
  handleVideoChange,
  removeImage,
  removeVideo,
  loading,
  error,
  onSubmit,
  onCancel,
  submitText,
}) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreview, setVideoPreview] = useState(null);

  // -----------------------------
  // Tag State
  // -----------------------------
  const [tagInput, setTagInput] = useState("");

  const tags = formData.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const addTag = (value) => {
    const newTag = value.trim();

    if (!newTag) return;

    // Prevent duplicate tags
    if (
      tags.some(
        (tag) => tag.toLowerCase() === newTag.toLowerCase()
      )
    ) {
      setTagInput("");
      return;
    }

    const updatedTags = [...tags, newTag];

    handleChange({
      target: {
        name: "tags",
        value: updatedTags.join(", "),
      },
    });

    setTagInput("");
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(
      (tag) => tag !== tagToRemove
    );

    handleChange({
      target: {
        name: "tags",
        value: updatedTags.join(", "),
      },
    });
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(tagInput);
    }
  };

  const handleTagBlur = () => {
    if (tagInput.trim()) {
      addTag(tagInput);
    }
  };

  // -----------------------------
  // Create and clean up image preview URLs
  // -----------------------------
  useEffect(() => {
    const previews = images.map((image) => {
      if (typeof image === "string") {
        return {
          url: image,
          isObjectUrl: false,
        };
      }

      return {
        url: URL.createObjectURL(image),
        isObjectUrl: true,
      };
    });

    setImagePreviews(previews);

    return () => {
      previews.forEach((preview) => {
        if (preview.isObjectUrl) {
          URL.revokeObjectURL(preview.url);
        }
      });
    };
  }, [images]);

  // -----------------------------
  // Create and clean up video preview URL
  // -----------------------------
  useEffect(() => {
    if (!video) {
      setVideoPreview(null);
      return;
    }

    if (typeof video === "string") {
      setVideoPreview(video);
      return;
    }

    const url = URL.createObjectURL(video);
    setVideoPreview(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [video]);

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* 01 / Details */}
      <section className="space-y-5 rounded-[1.5rem] border border-violet-100 bg-violet-50/45 p-5 sm:p-6">
        <div className="flex items-end justify-between gap-4 border-b border-violet-100 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              01 / Details
            </p>

            <h2 className="mt-1 text-2xl font-bold text-stone-950">
              Shape the gathering
            </h2>
          </div>

          <span className="hidden rounded-full bg-violet-50 px-3 py-1 text-xs font-bold text-violet-700 sm:inline-flex">
            Required information
          </span>
        </div>

        <FormField
          label="Event Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter event title"
          required
        />

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

        {/* Event Dates */}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Start Date"
            name="start_date"
            type="date"
            value={formData.start_date}
            onChange={handleChange}
            required
          />

          <FormField
            label="End Date"
            name="end_date"
            type="date"
            value={formData.end_date}
            onChange={handleChange}
            required
          />
        </div>

        <p className="-mt-2 text-xs text-stone-500">
          For a one-day event, select the same date for both fields.
        </p>

        <FormField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Delhi"
          required
        />

        <FormField
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
          required
        />

        <FormField
          label="Description"
          name="description"
          type="textarea"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write event description..."
          rows={6}
          required
        />

        {/* Tags */}
        <div>
          <label
            htmlFor="event-tags"
            className="mb-2 block text-sm font-bold text-stone-800"
          >
            Tags
          </label>

          <div className="rounded-2xl border border-stone-200 bg-white p-3 transition focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-100">
            {tags.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1.5 text-sm font-semibold text-violet-700"
                  >
                    {tag}

                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      aria-label={`Remove ${tag}`}
                      className="inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-violet-500 transition hover:bg-violet-200 hover:text-violet-800"
                    >
                      <span className="sr-only">
                        Remove {tag}
                      </span>

                      <FiX
                        size={14}
                        aria-hidden="true"
                      />
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                id="event-tags"
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                onBlur={handleTagBlur}
                placeholder={
                  tags.length > 0
                    ? "Add another tag..."
                    : "Korea, Culture, Community..."
                }
                className="min-w-0 flex-1 border-0 bg-transparent px-1 py-2 text-sm text-stone-900 outline-none placeholder:text-stone-400"
              />

              <button
                type="button"
                onClick={() => addTag(tagInput)}
                disabled={!tagInput.trim()}
                aria-label="Add tag"
                className="inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-violet-100 text-violet-700 transition hover:bg-violet-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <FiPlus size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <p className="mt-2 text-xs text-stone-500">
            Press Enter or comma to add a tag.
          </p>
        </div>
      </section>

      {/* 02 / Atmosphere */}
      <section className="rounded-[1.5rem] border border-violet-100 bg-violet-50/45 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
              02 / Atmosphere
            </p>

            <h2 className="mt-1 flex items-center gap-2 text-2xl font-bold text-stone-950">
              <FiImage
                className="text-violet-600"
                aria-hidden="true"
              />
              Event images
            </h2>

            <p className="mt-2 text-sm leading-6 text-stone-600">
              Add up to five moments that invite people in.
            </p>
          </div>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700 shadow-sm">
            {images.length}/5
          </span>
        </div>

        <input
          id="event-images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="mt-5 block w-full cursor-pointer rounded-2xl border border-dashed border-violet-300 bg-white/80 p-3 text-sm text-stone-600 file:mr-4 file:cursor-pointer file:rounded-xl file:border-0 file:bg-violet-700 file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-white hover:border-violet-500 file:hover:bg-violet-800"
        />

        <p className="mt-2 text-xs text-stone-500">
          Upload 1 to 5 images.
        </p>

        {imagePreviews.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {imagePreviews.map((preview, index) => (
              <div
                key={`${preview.url}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-white bg-white shadow-[0_12px_30px_rgba(91,33,182,0.1)]"
              >
                <img
                  src={preview.url}
                  alt={`Event preview ${index + 1}`}
                  className="h-36 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  aria-label={`Remove image ${index + 1}`}
                  className="absolute right-2.5 top-2.5 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-stone-950/75 text-white shadow-lg shadow-stone-950/20 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
                >
                  <span className="sr-only">
                    Remove image
                  </span>

                  <FiX
                    size="20"
                    className="text-base"
                    aria-hidden="true"
                  />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 03 / Motion */}
      <section className="rounded-[1.5rem] border border-indigo-100 bg-indigo-50/45 p-5 sm:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
            03 / Motion
          </p>

          <h2 className="mt-1 flex items-center gap-2 text-2xl font-bold text-stone-950">
            <FiVideo
              className="text-indigo-600"
              aria-hidden="true"
            />
            Event video
          </h2>

          <p className="mt-2 text-sm leading-6 text-stone-600">
            Optional. Give the event a little more movement.
          </p>
        </div>

        <input
          id="event-video"
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="mt-5 block w-full cursor-pointer rounded-2xl border border-dashed border-indigo-300 bg-white/80 p-3 text-sm text-stone-600 file:mr-4 file:cursor-pointer file:rounded-xl file:border-0 file:bg-indigo-700 file:px-4 file:py-2.5 file:font-bold file:text-white hover:border-indigo-500 file:hover:bg-indigo-800"
        />

        {video && videoPreview && (
          <div className="relative mt-4 overflow-hidden rounded-2xl border border-white bg-stone-950 shadow-[0_16px_40px_rgba(49,46,129,0.14)]">
            <video
              src={videoPreview}
              controls
              className="max-h-72 w-full"
            />

            <button
              type="button"
              onClick={removeVideo}
              aria-label="Remove video"
              className="absolute right-2.5 top-2.5 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/60 bg-stone-950/75 text-white shadow-lg shadow-stone-950/20 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-rose-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-900"
            >
              <span className="sr-only">
                Remove video
              </span>

              <FiX
                size="20"
                className="text-base"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </section>

      {/* Error */}
      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-sm font-medium text-rose-700">
          {error}
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col-reverse gap-3 border-t border-violet-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <FiUploadCloud
            className="text-violet-600"
            aria-hidden="true"
          />
          Your media will be uploaded securely.
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="cursor-pointer rounded-full border border-violet-200 bg-white px-5 py-2.5 text-sm font-bold text-stone-700 transition hover:border-violet-300 hover:bg-violet-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer rounded-full bg-gradient-to-r from-violet-700 via-fuchsia-600 to-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-300/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-300/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Saving..." : submitText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EventForm;