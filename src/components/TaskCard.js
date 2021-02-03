import { useState } from "react";

// Icons
import Circle from "../assets/icons/circle.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import Trash from "../assets/icons/trash.svg";
import OpenTrash from "../assets/icons/open-trash.svg";
import PencilLight from "../assets/icons/pencil-light.svg";
import PencilDark from "../assets/icons/pencil-dark.svg";
import CheckLight from "../assets/icons/check-light.svg";
import CheckDark from "../assets/icons/check-dark.svg";
import CancelLight from "../assets/icons/cancel-light.svg";
import CancelDark from "../assets/icons/cancel-dark.svg";

// Components
import Icon from "../components/Icon";

const TaskCard = ({
  title,
  taskId,
  done,
  handleUpdateTask,
  handleDeleteTask,
}) => {
  const [hoverSelect, setHoverSelect] = useState(false);
  const [hoverTrash, setHoverTrash] = useState(false);
  const [hoverEdit, setHoverEdit] = useState(false);
  const [hoverCheck, setHoverCheck] = useState(false);
  const [hoverCancel, setHoverCancel] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(title);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="task-card line-center">
      <Icon
        setHover={setHoverSelect}
        hover={hoverSelect}
        icon1={Circle}
        icon2={CheckCircle}
        iconName="circle icon"
        onClickFunction={() => {
          handleUpdateTask(taskId, !done, null);
        }}
      />

      <div className="input-container">
        {edit ? (
          <div className="line-center">
            <input
              type="text"
              value={text}
              className="enabled"
              onChange={handleInputChange}
            />
            <Icon
              setHover={setHoverCheck}
              hover={hoverCheck}
              icon1={CheckDark}
              icon2={CheckLight}
              iconName="check icon"
              onClickFunction={() => {
                handleUpdateTask(taskId, null, text);
                setEdit(false);
              }}
            />
            <Icon
              setHover={setHoverCancel}
              hover={hoverCancel}
              icon1={CancelDark}
              icon2={CancelLight}
              iconName="cancel icon"
              onClickFunction={() => {
                setEdit(false);
                setHoverCancel(false);
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

      <div className="line-center">
        <Icon
          setHover={setHoverEdit}
          hover={hoverEdit}
          icon1={PencilLight}
          icon2={PencilDark}
          iconName="pencil icon"
          onClickFunction={() => {
            setEdit(true);
          }}
        />
        <Icon
          setHover={setHoverTrash}
          hover={hoverTrash}
          icon1={Trash}
          icon2={OpenTrash}
          iconName="trash icon"
          onClickFunction={() => {
            handleDeleteTask(taskId);
          }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
