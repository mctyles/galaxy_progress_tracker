import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import { UserContext } from "../../context/UserContext";
import { handleSubmit } from "./utils";
import ErrorMessage from "../../components/ErrorMessage";

export default function UserAuthenticationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { authType } = useParams();
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <form
      className="text-white flex flex-col"
      onSubmit={(event) =>
        handleSubmit(
          event,
          firstName,
          lastName,
          username,
          password,
          authType,
          setUser,
          setErrorMessage,
          navigate
        )
      }
    >
      <h1 className="text-2xl mb-3">
        {authType === "register" ? "Register" : "Login"}
      </h1>
      {errorMessage.length ? <ErrorMessage message={errorMessage} /> : null}
      {authType === "register" && (
        <>
          <FormInput
            inputName="first-name"
            labelContent="First Name:"
            inputType="text"
            inputValue={firstName}
            changeHandler={(e) => setFirstName(e.target.value)}
            isRequired={true}
          />
          <FormInput
            inputName="last-name"
            labelContent="Last Name:"
            inputType="text"
            inputValue={lastName}
            changeHandler={(e) => setLastName(e.target.value)}
            isRequired={true}
          />
        </>
      )}
      <FormInput
        inputName="username"
        labelContent="Username:"
        inputType="text"
        inputValue={username}
        changeHandler={(e) => setUsername(e.target.value)}
        isRequired={true}
      />
      <FormInput
        inputName="password"
        labelContent="Password:"
        inputType="password"
        inputValue={password}
        changeHandler={(e) => setPassword(e.target.value)}
        isRequired={true}
      />
      <section>
        <Button type="submit" content="Submit" clickHandler={null} />
      </section>
    </form>
  );
}
