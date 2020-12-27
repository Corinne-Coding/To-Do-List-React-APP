import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";
import FormInput from "../components/FormInput";
import RedirectButton from "../components/RedirectButton";

const SignInPage = ({ handleToken }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        setError(null);
        const response = await axios.post("http://localhost:3000/signin", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.token) {
          handleToken(response.data.token);
          history.push("/");
        } else {
          setError("randomError");
        }
      } catch (e) {
        if (e.response.data.error === "Unauthorized") {
          setError("incorrectCredentials");
        } else {
          setError("randomError");
        }
      }
    } else {
      setError("emptyField");
    }
  };

  return (
    <>
      <Header displayDisconnectButton={false} />
      <main className="column-center">
        <h2>Sign in</h2>
        <form className="column-center" onSubmit={handleFormSubmit}>
          <FormInput
            placeholder="email"
            type="email"
            value={email}
            setFunction={setEmail}
          />

          <FormInput
            placeholder="password"
            type="password"
            value={password}
            setFunction={setPassword}
          />

          <ErrorMessage name={error} />
          <input type="submit" value="Submit" />

          <RedirectButton
            text="Create an account ? Sign up"
            page="/signup"
            connection={false}
          />
        </form>
      </main>
    </>
  );
};

export default SignInPage;
