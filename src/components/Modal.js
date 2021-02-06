// Components
import ErrorMessage from "./ErrorMessage";
import FormInput from "./FormInput";
import FormInputButton from "./FormInputButton";
import LoaderAnimation from "./LoaderAnimation";

const Modal = ({
  setFunction,
  handleFormSubmit,
  error,
  isLoadingBoard,
  setDisplayModal,
  inputValue,
  modalType,
  boardInfos,
}) => {
  return (
    <div className="modal line-center">
      <form className="column-center" onSubmit={handleFormSubmit}>
        {/*  cross icon to close modal */}
        <i
          className="fas fa-times"
          onClick={() => {
            setDisplayModal(false);
          }}
        ></i>

        <h3>
          {modalType === "add"
            ? "Add board"
            : modalType === "update"
            ? "Update board"
            : modalType === "delete"
            ? `Remove ${boardInfos.title}`
            : null}
        </h3>

        {modalType === "delete" && <p>Do you want to remove this board ?</p>}

        {modalType === "add" || modalType === "update" ? (
          <FormInput
            type="text"
            setFunction={setFunction}
            value={inputValue}
            placeholder={modalType === "add" ? "title" : null}
          />
        ) : null}

        <ErrorMessage name={error} />

        <FormInputButton
          value={
            modalType === "add"
              ? "Create board"
              : modalType === "update"
              ? "Update board"
              : modalType === "delete"
              ? "Confirm"
              : null
          }
          isDisabled={isLoadingBoard}
        />

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
