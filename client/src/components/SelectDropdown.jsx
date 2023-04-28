export default function SelectDropdown({ options, value, handleChange }) {
  return (
    <select onChange={handleChange} value={value} className="p-3 rounded">
      {options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
}
