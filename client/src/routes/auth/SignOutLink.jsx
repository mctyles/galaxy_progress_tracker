import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { handleSignOut } from "./utils";

export default function SignOutLink() {
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <li className="px-3 text-blue-300 hover:text-slate-400">
      <button type="button" onClick={() => handleSignOut(setUser, navigate)}>
        Sign Out
      </button>
    </li>
  );
}
