import React, { useState } from "react";

// Components
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (info, value) => {
    if (info === "email") {
      setEmail(value);
    } else if (info === "username") {
      setUsername(value);
    } else if (info === "password") {
      setPassword(value);
    } else if (info === "confirm") {
      setConfirmPassword(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (email && username && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log("requete");
      } else {
        setError("passwordsError");
      }
    } else {
      setError("emptyFields");
    }
  };

  return (
    <>
      <Header />
      <main className="column-center">
        <h2>Sign in</h2>
        <form className="column-center" onSubmit={handleFormSubmit}>
          <input
            placeholder="email"
            type="email"
            className="form-input"
            onChange={(event) => {
              handleInputChange("email", event.target.value);
            }}
          />
          <input
            placeholder="username"
            type="text"
            className="form-input"
            onChange={(event) => {
              handleInputChange("username", event.target.value);
            }}
          />
          <input
            placeholder="password"
            type="password"
            className="form-input"
            onChange={(event) => {
              handleInputChange("password", event.target.value);
            }}
          />
          <input
            placeholder="confirm password"
            type="password"
            className="form-input"
            onChange={(event) => {
              handleInputChange("confirm", event.target.value);
            }}
          />

          <ErrorMessage name={error} />
          <input type="submit" value="Submit" />
        </form>
      </main>
    </>
  );
};

export default SignUpPage;
