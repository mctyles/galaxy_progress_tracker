export default function Button({ type, content, clickHandler }) {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className="px-4 py-2 rounded-xl border border-indigo-800 bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:bold hover:shadow-blue-900 hover:shadow-md hover:from-blue-700 hover:to-blue-600"
    >
      {content}
    </button>
  );
}
