export default function Hamburger({ clickHandler }) {
  return (
    <div
      className="p-2 ml-2 space-y-2 bg-slate-600/75 rounded border shadow w-11 h-10 lg:hidden flex flex-col items-center"
      onClick={clickHandler}
    >
      <span className="block w-6 h-0.5 bg-gray-100"></span>
      <span className="block w-6 h-0.5 bg-gray-100"></span>
      <span className="block w-6 h-0.5 bg-gray-100"></span>
    </div>
  );
}
