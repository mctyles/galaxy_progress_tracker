import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hamburger from "../components/mobile/Hamburger";
import { useState } from "react";
import MobileNavMenu from "../components/mobile/MobileNavMenu";
import galaxyCat from "../assets/galaxycat.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="flex justify-between items-center content-center pb-5 mb-6 w-full border-b">
      <Link
        to="/"
        className="font-extrabold text-sm sm:text-md md:text-xl lg:text-2xl text-white flex items-center"
      >
        <img
          src={galaxyCat}
          className="h-10 w-10 sm:h-15 sm:w-15 md:h-20 md:w-20 p-1 bg-white hover:bg-slate-300 border-black border-3 rounded-full mr-3"
        />
        <h1>GALAXY PROGRESS TRACKER</h1>
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
