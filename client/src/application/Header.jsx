import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hamburger from "../components/mobile/Hamburger";
import { useState } from "react";
import MobileNavMenu from "../components/mobile/MobileNavMenu";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="flex justify-between">
      <Link to="/" className="font-extrabold text-2xl text-white">
        GALAXY PROGRESS TRACKER
      </Link>
      <Hamburger clickHandler={() => setIsNavOpen((prev) => !prev)} />
      {isNavOpen && (
        <MobileNavMenu
          clickHandler={() => setIsNavOpen((prev) => !prev)}
          isNavOpen={isNavOpen}
        />
      )}
      <Navbar />
    </header>
  );
}
