import { useContext, useState } from "react";
import { onFileUploadSubmitClickedHandler } from "./utils";
import { UserContext } from "../context/UserContext";

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const { user } = useContext(UserContext);
  const { token } = user;

  function onFileChanged(event) {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    event.stopPropagation();
    onFileUploadSubmitClickedHandler(token, selectedFile, setImageUrl);
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <input
        type="file"
        name="image"
        onChange={onFileChanged}
        required={true}
      />
      <button
        type="submit"
        className="px-1 border-2 border-gray-700 rounded-md bg-gray-100"
      >
        Upload
      </button>
    </form>
  );
}
