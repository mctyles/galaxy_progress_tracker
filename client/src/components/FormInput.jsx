export default function FormInput({
  inputName,
  labelContent,
  inputType,
  inputValue,
  changeHandler,
  isRequired = false,
}) {
  return (
    <fieldset className="mb-3 flex flex-col">
      <label htmlFor={inputName}>{labelContent}</label>
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
