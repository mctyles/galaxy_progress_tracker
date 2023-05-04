export default function Button({ type, content, clickHandler }) {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className="p-3 rounded border border-indigo-800 bg-indigo-200 text-black"
    >
      {content}
    </button>
  );
}
