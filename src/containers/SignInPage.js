import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";
import FormInput from "../components/FormInput";
import FormInputButton from "../components/FormInputButton";
import RedirectButton from "../components/RedirectButton";
import LoaderAnimation from "../components/LoaderAnimation";

const SignInPage = ({ handleToken }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        setIsLoading(true);
        setIsDisabled(true);
        setError(null);
        const response = await axios.post("http://localhost:3000/signin", {
          email,
          password,
        });
        setIsDisabled(false);
        if (response.data.token) {
          setTimeout(() => {
            handleToken(response.data.token);
            setIsLoading(false);
            history.push("/");
          }, 1000);
        } else {
          setError("error");
        }
      } catch (e) {
        setIsLoading(false);
        setIsDisabled(false);
        if (e.response.data.error === "Unauthorized") {
          setError("incorrectCredentials");
        } else {
          setError("error");
        }
      }
    } else {
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

          <FormInputButton value="Submit" isDisabled={isDisabled} />

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
