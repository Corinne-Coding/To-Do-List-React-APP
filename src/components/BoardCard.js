// Components
import CardTitle from "../components/CardTitle";

import { useHistory } from "react-router-dom";

const BoardCard = ({
  boardInfos,
  handleRemoveBoard,
  setDisplayModal,
  setId,
  setTitleToUpdate,
}) => {
  const history = useHistory();

  return (
    <div
      className="board-card column-center btn"
      onClick={(e) => {
        if (
          e.target.className !== "fas fa-edit" &&
          e.target.className !== "fas fa-trash-alt"
        ) {
          history.push(`/board/${boardInfos._id}`, { boardId: boardInfos._id });
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
        <CardTitle title={boardInfos.title} />
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
