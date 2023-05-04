import { Link } from "react-router-dom";

export default function NavLink({ path, linkName }) {
  return (
    <li className="px-3 text-blue-300 hover:text-slate-400">
      <Link to={path}>{linkName}</Link>
    </li>
  );
}
