import { useContext, useState } from "react";
import FileUpload from "../../components/FileUpload";
import useAssignmentsList from "../../hooks/useAssignmentsList";
import FormTextArea from "../../components/FormTextArea";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { addNewStudentAssignment } from "../../api/studentAssignments";
import { UserContext } from "../../context/UserContext";

export default function AddStudentAssignmentForm({ studentId }) {
  const assignments = useAssignmentsList();
  const { user } = useContext(UserContext);

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [assignmentId, setAssignmentId] = useState(assignments[0]?.id);
  const [assignmentNotes, setAssignmentNotes] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const studentAssignment = await addNewStudentAssignment(user?.token, {
      earnedPoints,
      imageUrl,
      notes: assignmentNotes,
      studentId,
      assignmentId,
    });

    if (studentAssignment) {
      setSubmitSuccess(true);
    }
  };

  const handleAssignmentChanged = (event) => {
    const selectedAssignmentId = event.target.value;
    setAssignmentId(selectedAssignmentId);
  };

  const handleEarnedPointsChanged = (event) => {
    const enteredEarnedPoints = event.target.value;
    setEarnedPoints(enteredEarnedPoints);
  };

  const handleNotesChanged = (event) => {
    const notes = event.target.value;
    setAssignmentNotes(notes);
  };

  return (
    <section className="flex justify-center">
      {submitSuccess ? (
        <p>Assignment successfully added for student!</p>
      ) : (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <FileUpload setImageUrl={setImageUrl} />
          <label>Select Assignment:</label>
          <select
            onChange={handleAssignmentChanged}
            value={assignmentId}
            required={true}
            className="p-2 border-2 border-gray-700 rounded-md bg-gray-100 text-sm font-semibold text-gray-900"
          >
            {assignments.map((assignment) => {
              return (
                <option key={assignment.id} value={assignment.id}>
                  {assignment.name}
                </option>
              );
            })}
          </select>
          <FormInput
            inputName="earned_points"
            labelContent="Points Earned:"
            inputType="number"
            inputValue={earnedPoints}
            changeHandler={handleEarnedPointsChanged}
            required={false}
          />
          <FormTextArea
            inputName="assignment-notes"
            inputValue={assignmentNotes}
            labelContent="Notes:"
            changeHandler={handleNotesChanged}
          />
          <Button type="submit" content={"Submit"} clickHandler={null} />
        </form>
      )}
    </section>
  );
}
