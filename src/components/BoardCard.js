import { useHistory } from "react-router-dom";

// Components
import CardTitle from "../components/CardTitle";

// Functions
import displayDate from "../assets/functions/displayDate";

const BoardCard = ({
  boardInfos,
  setDisplayUpdateBoardModal,
  setDisplayDeleteBoardModal,
  setTitleToUpdate,
  setBoardInfos,
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
          history.push(`/board/${boardInfos._id}`, {
            boardId: boardInfos._id,
            boardTitle: boardInfos.title,
          });
        }
      }}
    >
      <div className="line-center up">
        <i
          className="fas fa-edit"
          onClick={(e) => {
            if (e.target.className === "fas fa-edit") {
              setDisplayUpdateBoardModal(true);
              setBoardInfos(boardInfos);
              setTitleToUpdate(boardInfos.title);
            }
          }}
        ></i>
        <CardTitle title={boardInfos.title} />
        <i
          className="fas fa-trash-alt"
          onClick={(e) => {
            if (e.target.className === "fas fa-trash-alt") {
              setBoardInfos(boardInfos);
              setDisplayDeleteBoardModal(true);
            }
          }}
        ></i>
      </div>

      <div className="column-center board-card-date">
        <p>Board created on</p>

        <p>{displayDate(boardInfos.date)}</p>
      </div>
    </div>
  );
};

export default BoardCard;
