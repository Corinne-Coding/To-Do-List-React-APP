const AddButton = ({ setDisplayModal, text }) => {
  return (
    <div
      onClick={() => {
        setDisplayModal && setDisplayModal(true);
      }}
      className="btn styled-btn blue-btn add-board-btn line-center"
    >
      {text}
    </div>
  );
};

export default AddButton;
