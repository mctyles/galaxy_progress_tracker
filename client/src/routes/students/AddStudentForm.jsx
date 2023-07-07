import { useContext, useState, React, Fragment } from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { UserContext } from "../../context/UserContext";
import { addNewStudent } from "../../api/students";
import SuccessMessage from "../../components/SuccessMessage";
import { schoolYears } from "./utils";
import { useNavigate } from "react-router-dom";

export default function AddStudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastInitial, setLastInitial] = useState("");
  const [readingLevel, setReadingLevel] = useState("");
  const [schoolYear, setSchoolYear] = useState(schoolYears[0]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { user } = useContext(UserContext);
  const navigate = useNavigate(0);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const addedStudent = await addNewStudent(user?.token, {
      firstName,
      lastInitial,
      readingLevel,
      schoolYear,
      teacherId: user?.user.id,
    });

    if (addedStudent) {
      setSubmitSuccess(true);
      navigate(0);
    }
  };

  const handleFirstNameChanged = (event) => {
    const enteredFirstName = event.target.value;
    setFirstName(enteredFirstName);
  };

  const handleLastInitialChanged = (event) => {
    const enteredLastInitial = event.target.value;
    setLastInitial(enteredLastInitial);
  };

  const handleReadingLevelChanged = (event) => {
    const enteredReadingLevel = event.target.value;
    setReadingLevel(enteredReadingLevel);
  };

  const handleSchoolYearChanged = (event) => {
    const selectedSchoolYear = event.target.value;
    setSchoolYear(selectedSchoolYear);
  };

  return (
    <section className="flex justify-center">
      {submitSuccess ? (
        <SuccessMessage message="Student successfully added to roster!" />
      ) : (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow text-white"
        >
          <FormInput
            inputName="first_name"
            labelContent="First Name:"
            inputType="text"
            inputValue={firstName}
            changeHandler={handleFirstNameChanged}
            required={true}
          />

          <FormInput
            inputName="last_initial"
            labelContent="Last Initial:"
            inputType="text"
            inputValue={lastInitial}
            changeHandler={handleLastInitialChanged}
            required={true}
          />

          <FormInput
            inputName="reading_level"
            labelContent="Reading Level:"
            inputType="text"
            inputValue={readingLevel}
            changeHandler={handleReadingLevelChanged}
          />
          <fieldset className="flex flex-col">
            <label className="text-sm sm:text-md mb-2">
              Select School Year:
            </label>
            <select
              onChange={handleSchoolYearChanged}
              value={schoolYear}
              required={true}
              className="p-2 border-2 border-gray-700 rounded-md bg-gray-100 text-sm font-semibold text-gray-900"
            >
              {schoolYears.map((year) => {
                return (
                  <Fragment key={year}>
                    <option>{year}</option>
                  </Fragment>
                );
              })}
            </select>
          </fieldset>

          <Button type="submit" content={"Submit"} clickHandler={null} />
        </form>
      )}
    </section>
  );
}
