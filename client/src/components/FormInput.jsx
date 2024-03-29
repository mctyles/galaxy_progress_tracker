export default function FormInput({
  inputName,
  labelContent,
  inputType,
  inputValue,
  changeHandler,
  isRequired = false,
}) {
  return (
    <fieldset className="mb-3 flex flex-col text-sm sm:text-md w-full">
      <label className="mb-2" htmlFor={inputName}>
        {labelContent}
      </label>
      <input
        id={inputName}
        name={inputName}
        value={inputValue}
        type={inputType}
        onChange={changeHandler}
        required={isRequired}
        className="text-black p-2 w-full rounded"
      />
    </fieldset>
  );
}
