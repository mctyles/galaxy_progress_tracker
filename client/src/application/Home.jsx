import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <main>
      <h1>
        Welcome to the Galaxy Progress Tracker
        {user && `, ${user.user.username}`}
      </h1>
    </main>
  );
}
