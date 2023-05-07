import { useState } from "react";
import SelectDropdown from "../../components/SelectDropdown";

export default function AddStudentAssignmentForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [assignmentNotes, setAssignmentNotes] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);

  return (
    <section className="flex justify-center">
      {submitSuccess ? (
        <p>Assignment successfully added for student!</p>
      ) : (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <FormInput
            inputName="earned_points"
            labelContent="Points Earned:"
            inputType="number"
            inputValue={earnedPoints}
            changeHandler={handleEarnedPointsChanged}
            required={false}
          />
          <SelectDropdown />
          <Button type="submit" content={"Submit"} clickHandler={null} />
        </form>
      )}
    </section>
  );
}
