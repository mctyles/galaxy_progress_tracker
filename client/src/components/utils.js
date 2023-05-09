import { fetchImageUploadURL, uploadFileToS3Bucket } from "../api/s3url";

export async function onFileUploadSubmitClickedHandler(
  token,
  file,
  setImageUrl
) {
  console.log("Hi", token, file.name);

  const { url } = await fetchImageUploadURL(token, file.name);

  console.log(url);

  await uploadFileToS3Bucket(url, file);

  const imageUrl = url.split("?")[0];

  console.log(imageUrl);

  setImageUrl(imageUrl);
}
