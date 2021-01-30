const AddButton = ({ setDisplayModal, text, setFunction }) => {
  return (
    <div
      onClick={() => {
        setDisplayModal && setDisplayModal(true);
        setFunction && setFunction();
      }}
      className="btn styled-btn blue-btn add-btn line-center"
    >
      {text}
    </div>
  );
};

export default AddButton;
