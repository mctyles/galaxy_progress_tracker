import { Link } from "react-router-dom";

export default function NavLink({ path, linkName }) {
  return (
    <li className="text-lg py-3 lg:px-3 lg:py-0 text-blue-300 hover:text-slate-400">
      <Link to={path}>{linkName}</Link>
    </li>
  );
}
