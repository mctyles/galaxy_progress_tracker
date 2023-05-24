import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hamburger from "../components/mobile/Hamburger";

export default function Header() {
  return (
    <header className="flex justify-between">
      <Link to="/" className="font-extrabold text-2xl text-white">
        GALAXY PROGRESS TRACKER
      </Link>
      <Hamburger />
      <Navbar />
    </header>
  );
}
