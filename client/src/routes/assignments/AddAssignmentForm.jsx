import { useContext, useState, React, Fragment } from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { UserContext } from "../../context/UserContext";
import useCategories from "../../hooks/useCategories";
import { addNewAssignment } from "../../api/assignments";
import Datepicker from "react-tailwindcss-datepicker";
import SuccessMessage from "../../components/SuccessMessage";

export default function AddAssignmentForm() {
  const categories = useCategories();

  const [name, setName] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [dateAssigned, setDateAssigned] = useState({
    startDate: null,
    endDate: null,
  });

  const { user } = useContext(UserContext);

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const assignment = await addNewAssignment(user?.token, {
      name,
      totalPoints,
      categoryId,
      dateAssigned: dateAssigned.startDate,
      teacherId: user?.user.id,
    });

    if (assignment) {
      setSubmitSuccess(true);
    }
  };

  const handleNameChanged = (event) => {
    const enteredName = event.target.value;
    setName(enteredName);
  };

  const handleTotalPointsChanged = (event) => {
    const enteredTotalPoints = event.target.value;
    setTotalPoints(enteredTotalPoints);
  };

  const handleCategoryChanged = (event) => {
    const selectedCategoryId = event.target.value;
    setCategoryId(selectedCategoryId);
  };

  return (
    <section className="flex justify-center text-white">
      {submitSuccess ? (
        <SuccessMessage message="Assignment successfully added" />
      ) : (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <fieldset className="flex flex-col text-sm sm:text-md">
            <label className="mb-3">Select Date Assigned:</label>
            <Datepicker
              useRange={false}
              asSingle={true}
              primaryColor={"sky"}
              value={dateAssigned}
              placeholder="Select date"
              onChange={(newValue) => setDateAssigned(newValue)}
              inputClassName={"bg-white w-full rounded-lg p-3"}
            />
          </fieldset>
          <FormInput
            inputName="assignment_name"
            labelContent="Assignment Name:"
            inputType="text"
            inputValue={name}
            changeHandler={handleNameChanged}
            isRequired={true}
          />

          <FormInput
            inputName="total_points"
            labelContent="Total Points:"
            inputType="text"
            inputValue={totalPoints}
            changeHandler={handleTotalPointsChanged}
            isRequired={false}
          />
          <fieldset className="flex flex-col text-sm sm:text-md">
            <label className="mb-2">Select Subject Category:</label>
            <select
              onChange={handleCategoryChanged}
              value={categoryId}
              isRequired={true}
              className="py-3 px-2 border-2 border-gray-700 rounded-lg bg-gray-100 text-sm font-semibold text-gray-900"
            >
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
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
