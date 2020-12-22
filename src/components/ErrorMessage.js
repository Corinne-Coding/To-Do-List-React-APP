import React from "react";

const passwordsError = "Your passwords must be the same.";
const emptyField = "Please fill all the fields.";
const takenEmail = "This email already exists.";
const randomError = "Sorry, an error occurred.";

const ErrorMessage = ({ name }) => {
  return (
    <div className="error-message line-center">
      {name === "passwordsError"
        ? passwordsError
        : name === "emptyField"
        ? emptyField
        : name === "takenEmail"
        ? takenEmail
        : name === "randomError"
        ? randomError
        : null}
    </div>
  );
};

export default ErrorMessage;
