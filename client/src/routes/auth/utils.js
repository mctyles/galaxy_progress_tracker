import { login, register } from "../../api/users";

export const handleSubmit = async (
  event,
  firstName,
  lastName,
  username,
  password,
  authType,
  setUser,
  navigate
) => {
  event.preventDefault();
  let user = null;

  if (authType === "login") {
    user = await login(username, password);
  } else if (authType === "register") {
    user = await register(firstName, lastName, username, password);
  }

  if (user) {
    setUser(user);
    window.localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  }

  return;
};

export const handleSignOut = (setUser, navigate) => {
  window.localStorage.removeItem("user");
  setUser(null);
  navigate("/");
};
