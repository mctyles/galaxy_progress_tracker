import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useStudentsList from "../hooks/useStudentsList";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <main className="m-3 w-full h-full flex-col justify-center content-center">
      <h1 className="p-2 my-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-100">
        Welcome to the Galaxy Progress Tracker
        {user && `, ${user.user.firstName}`}!
      </h1>
      {!user && (
        <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Please log in or sign up to get started.
        </p>
      )}
    </main>
  );
}
