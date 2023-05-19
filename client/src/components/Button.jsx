export default function Button({ type, content, clickHandler }) {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className="p-2 w-1/4 rounded border border-indigo-800 bg-indigo-200 text-black hover:bg-indigo-800 hover:text-white"
    >
      {content}
    </button>
  );
}
