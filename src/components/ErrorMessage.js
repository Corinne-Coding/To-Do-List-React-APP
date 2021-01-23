const errors = {
  passwordsError: "Your passwords must be the same",
  emptyField: "Please, fill all the fields",
  existingEmail: "This email already exists",
  incorrectCredentials: "Incorrect credentials",
  randomError: "Sorry, an error occurred",
  missingTitle: "Please, add a title",
  error: "An error occurred",
};

const ErrorMessage = ({ name }) => {
  return (
    <div className="error-message line-center">
      {name === "passwordsError"
        ? errors.passwordsError
        : name === "emptyField"
        ? errors.emptyField
        : name === "existingEmail"
        ? errors.existingEmail
        : name === "randomError"
        ? errors.randomError
        : name === "incorrectCredentials"
        ? errors.incorrectCredentials
        : name === "missingTitle"
        ? errors.missingTitle
        : name === "error"
        ? errors.error
        : null}
    </div>
  );
};

export default ErrorMessage;
