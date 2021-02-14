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

const SignUpPage = ({ handleTokenAndName }) => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    console.log("00");
    event.preventDefault();
    if (email && username && password && confirmPassword) {
      console.log("01");
      if (password === confirmPassword) {
        console.log("02");
        try {
          setIsLoading(true);
          setError(null);

          console.log("03");
          // send data to server
          const response = await axios.post(
            "https://to-do-list-express-api.herokuapp.com/signup",
            {
              email,
              username,
              password,
            }
          );

          console.log("https://to-do-list-express-api.herokuapp.com/signup");

          console.log(response);
          console.log(response.data);

          // if response
          if (response.data.token) {
            setTimeout(() => {
              setIsLoading(false);
              handleTokenAndName(response.data.token, response.data.username);
              // redirect to boards page
              history.push("/");
            }, 1000);
          } else {
            setError("error");
          }
        } catch (e) {
          setIsLoading(false);

          // email already exists in DB
          if (e.response.data.error === "This email already has an account.") {
            setError("existingEmail");
          } else {
            setError("error");
          }
        }
      } else {
        // passwords not identical
        setError("passwordsError");
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

          <div className="line-center message-container-center">
            {isLoading ? (
              <LoaderAnimation type="Circles" height="1.4rem" width="1.4rem" />
            ) : (
              <ErrorMessage name={error} />
            )}
          </div>

          <FormInputButton value="Submit" isDisabled={isLoading} />

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
