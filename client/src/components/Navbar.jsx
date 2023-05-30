import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SignOutLink from "../routes/auth/SignOutLink";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

export default function Navbar({ isNavOpen }) {
  const { user } = useContext(UserContext);

  const loggedInNavLinks = [
    { path: "/", linkName: "Home" },
    { path: "me/students", linkName: "Students" },
    { path: "me/assignments", linkName: "Manage Assignments" },
  ];

  const loggedOutNavLinks = [
    { path: "/users/login", linkName: "Login" },
    { path: "/users/register", linkName: "Register" },
  ];

  const navLinks = user ? loggedInNavLinks : loggedOutNavLinks;

  return (
    <nav
      className={`flex flex-col lg:flex-row justify-between py-2 mb-6 ${
        !isNavOpen && "hidden"
      } lg:block`}
    >
      <ul className="flex flex-col items-center lg:flex-row lg:items-start">
        {navLinks.map((link, idx) => {
          const { path, linkName } = link;
          return (
            <NavLink
              key={`${linkName}${idx}`}
              path={path}
              linkName={linkName}
            />
          );
        })}
        {user && <SignOutLink />}
      </ul>
    </nav>
  );
}
