import { useState } from "react";

// Components
import Icon from "../components/Icon";

// Icons
import CancelDark from "../assets/icons/cancel-dark.svg";
import CancelLight from "../assets/icons/cancel-light.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import CheckDark from "../assets/icons/check-dark.svg";
import CheckLight from "../assets/icons/check-light.svg";
import Circle from "../assets/icons/circle.svg";
import OpenTrash from "../assets/icons/open-trash.svg";
import PencilDark from "../assets/icons/pencil-dark.svg";
import PencilLight from "../assets/icons/pencil-light.svg";
import Trash from "../assets/icons/trash.svg";

const TaskCard = ({
  title,
  taskId,
  done,
  handleUpdateTask,
  handleDeleteTask,
  isLoadingTask,
}) => {
  // states
  const [hoverSelect, setHoverSelect] = useState(false);
  const [hoverTrash, setHoverTrash] = useState(false);
  const [hoverEdit, setHoverEdit] = useState(false);
  const [hoverCheck, setHoverCheck] = useState(false);
  const [hoverCancel, setHoverCancel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(title);

  // function to change input value
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="task-card line-center">
      {/* Select icon */}
      <Icon
        setHover={setHoverSelect}
        hover={hoverSelect}
        icon1={!done ? Circle : CheckCircle}
        icon2={!done ? CheckCircle : Circle}
        isLoadingTask={isLoadingTask}
        iconName="circle icon"
        onClickFunction={() => {
          !isLoadingTask && handleUpdateTask(taskId, !done, null);
        }}
      />

      {/* Input & validate icon & cancel icon */}
      <div className="input-container">
        {edit ? (
          <div className="line-center">
            <input
              type="text"
              value={text}
              className="enabled"
              autoFocus
              onChange={handleInputChange}
            />
            <Icon
              setHover={setHoverCheck}
              hover={hoverCheck}
              icon1={CheckDark}
              icon2={CheckLight}
              iconName="check icon"
              isLoadingTask={isLoadingTask}
              onClickFunction={() => {
                if (!isLoadingTask) {
                  handleUpdateTask(taskId, null, text);
                  setEdit(false);
                }
              }}
            />
            <Icon
              setHover={setHoverCancel}
              hover={hoverCancel}
              icon1={CancelDark}
              icon2={CancelLight}
              iconName="cancel icon"
              isLoadingTask={isLoadingTask}
              onClickFunction={() => {
                if (!isLoadingTask) {
                  setEdit(false);
                  setHoverCancel(false);
                }
              }}
            />
          </div>
        ) : (
          <input
            type="text"
            value={title}
            className="disabled"
            disabled
            maxLength={80}
          />
        )}
      </div>

      {/* Edit & trash icons */}
      <div className="line-center">
        <Icon
          setHover={setHoverEdit}
          hover={hoverEdit}
          icon1={PencilLight}
          icon2={PencilDark}
          iconName="pencil icon"
          isLoadingTask={isLoadingTask}
          onClickFunction={() => {
            !isLoadingTask && setEdit(true);
          }}
        />
        <Icon
          setHover={setHoverTrash}
          hover={hoverTrash}
          icon1={Trash}
          icon2={OpenTrash}
          iconName="trash icon"
          isLoadingTask={isLoadingTask}
          onClickFunction={() => {
            !isLoadingTask && handleDeleteTask(taskId);
          }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
