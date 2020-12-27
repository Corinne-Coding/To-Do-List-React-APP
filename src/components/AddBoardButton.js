import React from "react";

const AddBoardButton = () => {
  return (
    <div
      onClick={() => {
        console.log("add a board");
      }}
      className="add-board-btn"
    >
      Add a board
    </div>
  );
};

export default AddBoardButton;
