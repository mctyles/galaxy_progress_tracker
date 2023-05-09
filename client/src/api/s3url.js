import { s3URLController } from "./api";
import axios from "axios";

export async function fetchImageUploadURL(token, filename) {
  try {
    const config = {
      params: { filename },
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await s3URLController.get("", config);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function uploadFileToS3Bucket(url, file) {
  try {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const response = await axios.put(url, file, config);
    const { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
}
