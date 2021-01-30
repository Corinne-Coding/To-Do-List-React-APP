const errors = {
  passwordsError: "Your passwords must be the same",
  emptyField: "Please, fill all the fields",
  emptyTask: "Your task can't be empty",
  existingEmail: "This email already exists",
  incorrectCredentials: "Incorrect credentials",
  randomError: "Sorry, an error occurred",
  missingTitle: "Please, add a title",
  error: "An error occurred",
};

const ErrorMessage = ({ name }) => {
  return (
    <div className=" line-center error-message">
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
        : name === "emptyTask"
        ? errors.emptyTask
        : null}
    </div>
  );
};

export default ErrorMessage;
