import CloseButton from "../CloseButton";
import Navbar from "../Navbar";

export default function MobileNavMenu({ clickHandler, isNavOpen }) {
  return (
    <menu className="flex flex-col items-center justify-start absolute top-0 left-0 w-full h-full bg-white dark:bg-slate-900">
      <CloseButton clickHandler={clickHandler} />
      <section
        className="pl-4 flex flex-col items-center md:justify-around h-1/6 w-1/2 mt-12"
        onClick={clickHandler}
      >
        <Navbar isNavOpen={isNavOpen} />
      </section>
    </menu>
  );
}
