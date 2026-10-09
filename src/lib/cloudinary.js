const CLOUDINARY_CLOUD_NAME =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET =
  import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadToCloudinary = async (file, folder) => {
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
