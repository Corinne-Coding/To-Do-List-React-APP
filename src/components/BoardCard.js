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

  // function to calculate number of tasks todo or done
  const taskCounter = (info) => {
    let toDoCounter = 0;
    let doneCounter = 0;

    for (let i = 0; i < boardInfos.tasksId.length; i++) {
      if (!boardInfos.tasksId[i].done) {
        toDoCounter++;
      } else if (boardInfos.tasksId[i].done) {
        doneCounter++;
      }
    }

    if (info === "todo") {
      return toDoCounter;
    } else if (info === "done") {
      return doneCounter;
    }
  };

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
      {/* Edit icon & title & trash icon */}
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

      {/* Date */}
      <p className="board-card-date">{displayDate(boardInfos.date)}</p>

      {/* To do tasks */}
      <div className="line-center board-card-list">
        <div className="column-start">
          <p>
            {taskCounter("todo")}&nbsp;
            {taskCounter("todo") === 0 || taskCounter("todo") === 1
              ? "task"
              : "tasks"}
            &nbsp;to do
          </p>

          <ul>
            {boardInfos.tasksId.map((task) => {
              if (!task.done) {
                return <li key={task._id}>{task.title}</li>;
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>

      {/* Done tasks */}
      <div className="line-center board-card-list">
        <div className="column-start">
          <p>
            {taskCounter("done")}&nbsp;
            {taskCounter("done") === 0 || taskCounter("done") === 1
              ? "task"
              : "tasks"}
            &nbsp;done
          </p>

          <ul>
            {boardInfos.tasksId.map((task) => {
              if (task.done) {
                return <li key={task._id}>{task.title}</li>;
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
