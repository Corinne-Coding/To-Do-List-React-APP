import React from "react";

const BoardCard = ({ boardInfos }) => {
  // console.log("boardInfos", boardInfos);
  return (
    <div
      className="board-card column-center btn"
      onClick={(e) => {
        if (
          e.target.className === "board-card column-center btn" ||
          e.target.className === "board-card-h4"
        ) {
          console.log("card click");
        }
      }}
    >
      <div className="line-center up">
        <i
          className="fas fa-pen"
          onClick={(e) => {
            if (e.target.className === "fas fa-pen") {
              console.log(boardInfos._id);
            }
          }}
        ></i>
        <h4 className="board-card-h4">{boardInfos.title}</h4>
        <i
          className="fas fa-times"
          onClick={(e) => {
            if (e.target.className === "fas fa-times") {
              console.log("icon cross click");
            }
          }}
        ></i>
      </div>
    </div>
  );
};

export default BoardCard;
