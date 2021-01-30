// Components
import FormInput from "./FormInput";
import FormInputButton from "./FormInputButton";
import ErrorMessage from "./ErrorMessage";
import LoaderAnimation from "./LoaderAnimation";

const Modal = ({
  setFunction,
  handleFormSubmit,
  error,
  isLoadingBoard,
  disabled,
  setDisplayModal,
  title,
  inputType,
  inputPlaceholder,
  inputValue,
  buttonText,
}) => {
  return (
    <div className="modal line-center">
      <form className="column-center" onSubmit={handleFormSubmit}>
        <i
          className="fas fa-times"
          onClick={() => {
            setDisplayModal(false);
          }}
        ></i>
        <h3>{title}</h3>
        <FormInput
          type={inputType}
          setFunction={setFunction}
          value={inputValue}
        />

        <ErrorMessage name={error} />

        <FormInputButton value={buttonText} disabled={disabled} />

        {isLoadingBoard ? (
          <LoaderAnimation type="Oval" height={30} width={30} />
        ) : (
          <div className="empty-div"></div>
        )}
      </form>
    </div>
  );
};

export default Modal;
