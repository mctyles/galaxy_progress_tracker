import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import SignOutLink from "../routes/auth/SignOutLink";
import NavLink from "./NavLink";

export default function Navbar() {
  const { user } = useContext(UserContext);

  const loggedInNavLinks = [
    { path: "/", linkName: "Home" },
    { path: `me/students`, linkName: "Students" },
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
          const { path, linkName } = link;
          return <NavLink key={idx} path={path} linkName={linkName} />;
        })}
        {user && <SignOutLink />}
      </ul>
    </nav>
  );
}
