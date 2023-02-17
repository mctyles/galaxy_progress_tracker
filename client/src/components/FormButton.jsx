export default function FormButton({ type, content, clickHandler }) {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className="p-3 rounded border border-blue-500 bg-transparent"
    >
      {content}
    </button>
  );
}
