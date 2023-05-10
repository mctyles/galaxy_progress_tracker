export default function FormTextArea({
  inputName,
  labelContent,
  inputValue,
  changeHandler,
}) {
  return (
    <fieldset>
      <label htmlFor={inputName}>{labelContent}</label>
      <textarea
        id={inputName}
        name={inputName}
        value={inputValue}
        onChange={changeHandler}
        className="text-black p-1 rounded"
      />
    </fieldset>
  );
}
