import { useState } from "react";

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
          type="text"
          setFunction={setFunction}
          value={inputValue}
          placeholder={inputPlaceholder}
        />

        <ErrorMessage name={error} />

        <FormInputButton value={buttonText} isDisabled={isLoadingBoard} />

        {isLoadingBoard ? (
          <div className="empty-div line-center">
            <LoaderAnimation type="Oval" height="2rem" width="2rem" />
          </div>
        ) : (
          <div className="empty-div"></div>
        )}
      </form>
    </div>
  );
};

export default Modal;
