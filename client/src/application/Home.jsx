import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useStudentsList from "../hooks/useStudentsList";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <main className="m-3">
      <h1 className="text-white my-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-100">
        Welcome to the Galaxy Progress Tracker
        {user && `, ${user.user.username}`}!
      </h1>
    </main>
  );
}
