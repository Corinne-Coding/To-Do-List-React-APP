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

  const [email, setEmail] = useState("coco@coco");
  const [password, setPassword] = useState("pass");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.post("http://localhost:3000/signin", {
          email,
          password,
        });
        // console.log(response.data);
        if (response.data.token) {
          handleToken(response.data.token);
          setIsLoading(false);
          history.push("/");
        } else {
          setError("randomError");
        }
      } catch (e) {
        setIsLoading(false);
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

          <FormInputButton value="Submit" disabled={false} />

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
