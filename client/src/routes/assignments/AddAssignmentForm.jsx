import { useContext, useState, React, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { UserContext } from "../../context/UserContext";
import useCategories from "../../hooks/useCategories";
import { addNewAssignment } from "../../api/assignments";

export default function AddAssignmentForm() {
  const categories = useCategories();

  const [name, setName] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    const assignment = await addNewAssignment(user?.token, {
      name,
      totalPoints,
      categoryId,
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
    <Fragment className="flex justify-center">
      {submitSuccess ? (
        <p>Assignment successfully added!</p>
      ) : (
        <form
          onSubmit={handleFormSubmission}
          className="flex flex-col gap-4 lg:max-w-xl grow"
        >
          <FormInput
            inputName="assignment_name"
            labelContent="Assignment Name:"
            inputType="text"
            inputValue={name}
            changeHandler={handleNameChanged}
            required={true}
          />

          <FormInput
            inputName="total_points"
            labelContent="Total Points:"
            inputType="text"
            inputValue={totalPoints}
            changeHandler={handleTotalPointsChanged}
            required={false}
          />

          <label>Select Subject Category:</label>
          <select
            onChange={handleCategoryChanged}
            value={categoryId}
            required={true}
            className="p-2 border-2 border-gray-700 rounded-md bg-gray-100 text-sm font-semibold text-gray-900"
          >
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <FormButton type="submit" content={"Submit"} clickHandler={null} />
        </form>
      )}
    </Fragment>
  );
}
