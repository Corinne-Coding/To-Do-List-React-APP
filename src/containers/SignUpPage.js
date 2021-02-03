import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";
import FormInput from "../components/FormInput";
import FormInputButton from "../components/FormInputButton";
import RedirectButton from "../components/RedirectButton";

const SignUpPage = ({ handleToken }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          setError(null);
          const response = await axios.post("http://localhost:3000/signup", {
            email,
            username,
            password,
          });

          if (response.data.token) {
            handleToken(response.data.token);
            history.push("/");
          } else {
            setError("randomError");
          }
        } catch (e) {
          if (e.response.data.error === "This email already has an account.") {
            setError("existingEmail");
          } else {
            setError("randomError");
          }
        }
      } else {
        setError("passwordsError");
      }
    } else {
      setError("emptyField");
    }
  };

  return (
    <>
      <Header displayDisconnectButton={false} />
      <main className="column-center container">
        <h2>Sign up</h2>
        <form className="column-center" onSubmit={handleFormSubmit}>
          <FormInput
            placeholder="email"
            type="email"
            value={email}
            setFunction={setEmail}
          />

          <FormInput
            placeholder="username"
            type="type"
            value={username}
            setFunction={setUsername}
          />

          <FormInput
            placeholder="password"
            type="password"
            value={password}
            setFunction={setPassword}
          />

          <FormInput
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            setFunction={setConfirmPassword}
          />

          <ErrorMessage name={error} />

          <FormInputButton value="Submit" disabled={false} />

          <RedirectButton
            text="Already have an account ? Sign in"
            page="/signin"
            styled="line"
          />
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
