import { Link } from "react-router-dom";

export default function NavLink({ path, linkName }) {
  return (
    <li className="px-3 text-blue-700 hover:text-blue-300/50">
      <Link to={path}>{linkName}</Link>
    </li>
  );
}
