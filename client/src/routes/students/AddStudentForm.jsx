import { useContext, useState, React, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { UserContext } from "../../context/UserContext";
import { addNewStudent } from "../../api/students";

export default function AddStudentForm() {
  const schoolYears = [
    "2022-23",
    "2023-24",
    "2024-25",
    "2025-26",
    "2026-27",
    "2027-28",
    "2028-29",
    "2029-30",
    "2030-31",
    "2031-32",
  ];

  const [firstName, setFirstName] = useState("");
  const [lastInitial, setLastInitial] = useState("");
  const [readingLevel, setReadingLevel] = useState("");
  const [schoolYear, setSchoolYear] = useState(schoolYears[0]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const addedStudent = await addNewStudent(user?.token, {
      firstName,
      lastInitial,
      readingLevel,
      schoolYear,
      teacherId: user?.user.id,
    });

    console.log(addedStudent);

    if (addedStudent) {
      setSubmitSuccess(true);
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
    <Fragment className="flex justify-center ">
      {submitSuccess ? (
        <p>Student was successfully added!</p>
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
            labelContent="Reading Level"
            inputType="text"
            inputValue={readingLevel}
            changeHandler={handleReadingLevelChanged}
          />

          <label>Select School Year:</label>
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

          <Button type="submit" content={"Submit"} clickHandler={null} />
        </form>
      )}
    </Fragment>
  );
}
