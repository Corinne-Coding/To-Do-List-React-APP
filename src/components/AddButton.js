const AddButton = ({ setDisplayModal, text, setFunction, isDisabled }) => {
  return (
    <div
      onClick={() => {
        setDisplayModal && setDisplayModal(true);
        setFunction && setFunction();
      }}
      className={
        isDisabled
          ? "btn styled-btn blue-btn add-btn-disabled line-center"
          : "btn styled-btn blue-btn add-btn line-center"
      }
    >
      {text}
    </div>
  );
};

export default AddButton;
