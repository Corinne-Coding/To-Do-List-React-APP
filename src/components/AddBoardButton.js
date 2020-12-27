import React from "react";

const AddBoardButton = () => {
  return (
    <div
      onClick={() => {
        console.log("add a board");
      }}
      className="btn styled-btn blue-btn add-board-btn line-center"
    >
      Add a board
    </div>
  );
};

export default AddBoardButton;
