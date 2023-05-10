import { fetchImageUploadURL, uploadFileToS3Bucket } from "../api/s3url";

export async function onFileUploadSubmitClickedHandler(
  token,
  file,
  setImageUrl,
  setProgress
) {
  const { url } = await fetchImageUploadURL(token, file.name);

  await uploadFileToS3Bucket(url, file, setProgress);

  const imageUrl = url.split("?")[0];

  setImageUrl(imageUrl);
}
