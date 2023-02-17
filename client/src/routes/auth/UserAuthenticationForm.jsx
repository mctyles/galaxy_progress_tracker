import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import { UserContext } from "../../context/UserContext";
import { handleSubmit } from "./utils";

export default function UserAuthenticationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { authType } = useParams();
  const { setUser } = useContext(UserContext);

  return (
    <form
      onSubmit={(event) =>
        handleSubmit(
          event,
          firstName,
          lastName,
          username,
          password,
          authType,
          setUser
        )
      }
    >
      <h1>{authType === "register" ? "Register" : "Login"}</h1>
      {authType === "register" && (
        <>
          <FormInput
            inputName="first-name"
            labelContent="First Name:"
            inputType="text"
            inputValue={firstName}
            changeHandler={(e) => setFirstName(e.target.value)}
          />
          <FormInput
            inputName="last-name"
            labelContent="Last Name:"
            inputType="text"
            inputValue={lastName}
            changeHandler={(e) => setLastName(e.target.value)}
          />
        </>
      )}
      <FormInput
        inputName="username"
        labelContent="Username:"
        inputType="text"
        inputValue={username}
        changeHandler={(e) => setUsername(e.target.value)}
      />
      <FormInput
        inputName="password"
        labelContent="Password:"
        inputType="password"
        inputValue={password}
        changeHandler={(e) => setPassword(e.target.value)}
      />
      <FormButton type="submit" content="Submit" clickHandler={null} />
    </form>
  );
}
