import React from "react";

// Components
import FormInput from "../components/FormInput";
import FormInputButton from "./FormInputButton";
import ErrorMessage from "../components/ErrorMessage";
import LoaderAnimation from "../components/LoaderAnimation";

const Modal = ({
  setFunction,
  handleFormSubmit,
  error,
  isLoadingBoardCreation,
  disabled,
}) => {
  return (
    <div className="modal line-center">
      <form className="column-center" onSubmit={handleFormSubmit}>
        <h3>Add a board</h3>
        <FormInput type="text" placeholder="title" setFunction={setFunction} />

        <ErrorMessage name={error} />

        <FormInputButton value="Create board" disabled={disabled} />

        {isLoadingBoardCreation ? (
          <LoaderAnimation type="Oval" height={30} width={30} />
        ) : (
          <div className="empty-div"></div>
        )}
      </form>
    </div>
  );
};

export default Modal;
