import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import ErrorMessage from "../components/ErrorMessage";
import FormInput from "../components/FormInput";
import FormInputButton from "../components/FormInputButton";
import Header from "../components/Header";
import LoaderAnimation from "../components/LoaderAnimation";
import RedirectButton from "../components/RedirectButton";

const SignInPage = ({ handleToken }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        setIsLoading(true);
        setError(null);

        // send data to server
        const response = await axios.post("http://localhost:3000/signin", {
          email,
          password,
        });

        // if response
        if (response.data.token) {
          setTimeout(() => {
            setIsLoading(false);
            handleToken(response.data.token);
            // redirect to boards page
            history.push("/");
          }, 1000);
        } else {
          setError("error");
        }
      } catch (e) {
        setIsLoading(false);

        // incorrect credentials
        if (e.response.data.error === "Unauthorized") {
          setError("incorrectCredentials");
        } else {
          setError("error");
        }
      }
    } else {
      // empty field(s)
      setError("emptyField");
    }
  };

  return (
    <>
      <Header displayDisconnectButton={false} />
      <main className="column-center container">
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

          <div className="line-center message-container-center">
            {isLoading ? (
              <LoaderAnimation type="Circles" height="1.4rem" width="1.4rem" />
            ) : (
              <ErrorMessage name={error} />
            )}
          </div>

          <FormInputButton value="Submit" isDisabled={isLoading} />

          <RedirectButton
            text="Create an account ? Sign up"
            page="/signup"
            styled="line"
          />
        </form>
      </main>
    </>
  );
};

export default SignInPage;
