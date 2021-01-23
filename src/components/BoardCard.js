const BoardCard = ({
  boardInfos,
  handleRemoveBoard,
  setDisplayModal,
  setId,
  setTitleToUpdate,
}) => {
  return (
    <div
      className="board-card column-center btn"
      onClick={(e) => {
        if (
          e.target.className !== "fas fa-edit" &&
          e.target.className !== "fas fa-trash-alt"
        ) {
          console.log("card click");
        }
      }}
    >
      <div className="line-center up">
        <i
          className="fas fa-edit"
          onClick={(e) => {
            if (e.target.className === "fas fa-edit") {
              setDisplayModal(true);
              setId(boardInfos._id);
              setTitleToUpdate(boardInfos.title);
            }
          }}
        ></i>
        <h4>{boardInfos.title}</h4>
        <i
          className="fas fa-trash-alt"
          onClick={(e) => {
            if (e.target.className === "fas fa-trash-alt") {
              handleRemoveBoard(boardInfos._id);
            }
          }}
        ></i>
      </div>
    </div>
  );
};

export default BoardCard;
