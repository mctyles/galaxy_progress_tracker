import { useState, createContext } from "react";
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
