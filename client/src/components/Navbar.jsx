import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import NavLink from "./NavLink";

export default function Navbar() {
  const { user } = useContext(UserContext);

  const loggedInNavLinks = [
    { path: "/", linkName: "Home" },
    { path: `/me/${user?.user.id}/students`, linkName: "My Students" },
    { path: "/me/profile", linkName: "Your Profile" },
  ];

  const loggedOutNavLinks = [
    { path: "/users/login", linkName: "Login" },
    { path: "/users/register", linkName: "Register" },
  ];

  const navLinks = user ? loggedInNavLinks : loggedOutNavLinks;

  return (
    <nav>
      <ul>
        {navLinks.map((link, idx) => {
          return (
            <NavLink key={idx} path={link.path} linkName={link.linkName} />
          );
        })}
      </ul>
    </nav>
  );
}
