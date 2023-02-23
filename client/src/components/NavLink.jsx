import { Link } from "react-router-dom";

export default function NavLink({ path, linkName }) {
  return (
    <li>
      <Link to={path}>{linkName}</Link>
    </li>
  );
}
