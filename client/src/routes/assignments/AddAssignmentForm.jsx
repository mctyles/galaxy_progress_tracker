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

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleFormSubmission = async (event) => {
    event.preventDefault();

    addNewAssignment(user?.token, {
      name,
      totalPoints,
      categoryId,
      teacherId: user?.user.id,
    });

    navigate("/me/assignments");
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

  const handleCancelButtonClick = () => {
    navigate("/assignments");
  };

  return (
    <Fragment className="flex justify-center">
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
              <Fragment key={category.id}>
                <option value={category.id}>{category.name}</option>
              </Fragment>
            );
          })}
        </select>

        <FormButton type="submit" content={"Submit"} clickHandler={null} />
      </form>
      <FormButton
        type="button"
        content={"Cancel"}
        clickHandler={handleCancelButtonClick}
      />
    </Fragment>
  );
}
