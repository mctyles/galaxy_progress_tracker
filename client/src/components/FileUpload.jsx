import { useContext, useState } from "react";
import { onFileUploadSubmitClickedHandler } from "./utils";
import { UserContext } from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";

export default function FileUpload({ setImageUrl }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const { user } = useContext(UserContext);
  const { token } = user;

  function onFileChanged(event) {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
  }

  function handleButtonClick() {
    if (!selectedFile) {
      setErrorMessage("Please select a file to upload.");
      return;
    }

    onFileUploadSubmitClickedHandler(
      token,
      selectedFile,
      setImageUrl,
      setProgress
    );
    setErrorMessage("");
  }

  return (
    <fieldset className="text-white p-2 border rounded-lg min-w-0">
      {errorMessage.length ? <ErrorMessage message={errorMessage} /> : null}
      <label htmlFor="image" className="mb-2">
        Upload Assignment Image:
      </label>
      <input
        className="mr-2 my-2 max-w-full"
        type="file"
        name="image"
        onChange={onFileChanged}
        required={true}
      />
      <Button type="button" content="Upload" clickHandler={handleButtonClick} />
      {progress ? (
        <fieldset className="p-2 flex items-center">
          <label htmlFor="file">Upload progress:</label>
          <progress
            className="h-3 mx-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500"
            id="file"
            max="100"
            value={progress}
          ></progress>
          <span>{`${progress}%`}</span>
        </fieldset>
      ) : null}
    </fieldset>
  );
}
