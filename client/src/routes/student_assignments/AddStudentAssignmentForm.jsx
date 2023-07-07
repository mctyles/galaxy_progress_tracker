import { useContext, useEffect, useState } from "react";
import FileUpload from "../../components/FileUpload";
import useAssignmentsList from "../../hooks/useAssignmentsList";
import FormTextArea from "../../components/FormTextArea";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { addNewStudentAssignment } from "../../api/studentAssignments";
import { UserContext } from "../../context/UserContext";
import useStudentsList from "../../hooks/useStudentsList";
import SuccessMessage from "../../components/SuccessMessage";
import ComboboxSelect from "../../components/ComboboxSelect";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

export default function AddStudentAssignmentForm({ student, assignment }) {
  const assignments = useAssignmentsList();
  const students = useStudentsList();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [assignmentId, setAssignmentId] = useState(assignment?.id ?? 1);
  const [studentId, setStudentId] = useState(student?.id ?? 1);
  const [assignmentNotes, setAssignmentNotes] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!assignment) setAssignmentId(assignments[0]?.id);
    if (!student) setStudentId(students[0]?.id);
  }, [assignments, students]);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const studentAssignment = await addNewStudentAssignment(user?.token, {
      earnedPoints,
      imageUrl,
      notes: assignmentNotes,
      studentId,
      assignmentId,
    });

    if (studentAssignment?.error) {
      setErrorMessage(studentAssignment?.error.data.message);
      return;
    }

    if (studentAssignment) {
      setSubmitSuccess(true);
      navigate(0);
    }
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
    <section className="flex justify-center text-white">
      {submitSuccess ? (
        <SuccessMessage message="Assignment successfully added for student!" />
      ) : (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl min-w-0"
        >
          {errorMessage.length ? <ErrorMessage message={errorMessage} /> : null}
          {student && (
            <fieldset className="text-sm sm:text-md w-full" required={true}>
              <label>Select Assignment:</label>
              <ComboboxSelect
                options={assignments}
                handleChange={(value) => setAssignmentId(value)}
              />
            </fieldset>
          )}
          {assignment && (
            <fieldset>
              <label>Select Student:</label>
              <ComboboxSelect
                options={students}
                handleChange={(value) => setStudentId(value)}
              />
            </fieldset>
          )}
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
          <FileUpload setImageUrl={setImageUrl} />
          <Button type="submit" content={"Submit"} clickHandler={null} />
        </form>
      )}
    </section>
  );
}
