export default function FormInput({
  inputName,
  labelContent,
  inputType,
  inputValue,
  changeHandler,
}) {
  return (
    <>
      <label htmlFor={inputName}>{labelContent}</label>
      <input
        id={inputName}
        name={inputName}
        value={inputValue}
        type={inputType}
        onChange={changeHandler}
        className="text-black p-1 rounded"
      />
    </>
  );
}
