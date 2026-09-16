import { useEffect, useState } from "react";
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

  // Create and clean up image preview URLs
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

  // Create and clean up video preview URL
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
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-5">
        <FormField
          label="Event Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter event title"
          required
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Event Type
          </label>

          <select
            name="event_type"
            value={formData.event_type}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
          >
            <option value="Daehwa Cafe Community">
              Daehwa Cafe Community
            </option>

            <option value="Daehwa Cafe Talkroom">
              Daehwa Cafe Talkroom
            </option>
          </select>
        </div>

        <FormField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

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

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write event description..."
            rows={6}
            required
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black"
          />
        </div>

        <FormField
          label="Tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Korea, Culture, Community, Workshop"
          required
        />

        <p className="-mt-3 text-xs text-gray-500">
          Add tags separated by commas.
        </p>
      </div>

      {/* Images */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Event Images
        </label>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-600"
        />

        <p className="mt-2 text-xs text-gray-500">
          Upload 1 to 5 images.
        </p>

        {imagePreviews.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {imagePreviews.map((preview, index) => (
              <div
                key={`${preview.url}-${index}`}
                className="relative overflow-hidden rounded-lg border border-gray-200"
              >
                <img
                  src={preview.url}
                  alt={`Event preview ${index + 1}`}
                  className="h-32 w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute right-2 top-2 rounded-full bg-white p-1 text-red-500 shadow"
                >
                  <span className="sr-only">Remove image</span>
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Event Video
        </label>

        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="block w-full text-sm text-gray-600"
        />

        <p className="mt-2 text-xs text-gray-500">
          Optional. Upload one video.
        </p>

        {video && videoPreview && (
          <div className="relative mt-4 overflow-hidden rounded-lg border border-gray-200">
            <video
              src={videoPreview}
              controls
              className="max-h-64 w-full"
            />

            <button
              type="button"
              onClick={removeVideo}
              className="absolute right-2 top-2 rounded-full bg-white p-1 text-red-500 shadow"
            >
              <span className="sr-only">Remove video</span>
              ×
            </button>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 border-t border-gray-200 pt-5">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Saving..." : submitText}
        </button>
      </div>
    </form>
  );
};

export default EventForm;