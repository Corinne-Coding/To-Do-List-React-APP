import React from "react";

const AddBoardButton = ({ setDisplayModal }) => {
  return (
    <div
      onClick={() => {
        setDisplayModal(true);
      }}
      className="btn styled-btn blue-btn add-board-btn line-center"
    >
      Add a board
    </div>
  );
};

export default AddBoardButton;
