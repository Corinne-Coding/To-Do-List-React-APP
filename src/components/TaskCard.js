import { useState } from "react";

// Icons
import Circle from "../assets/icons/circle.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import Trash from "../assets/icons/trash.svg";
import OpenTrash from "../assets/icons/open-trash.svg";
import Pen from "../assets/icons/pen.svg";
import Edit from "../assets/icons/edit.svg";
import CheckLight from "../assets/icons/check-light.svg";
import CheckDark from "../assets/icons/check-dark.svg";
import CancelLight from "../assets/icons/cancel-light.svg";
import CancelDark from "../assets/icons/cancel-dark.svg";

const TaskCard = ({ title }) => {
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
      <img
        onMouseEnter={() => {
          setHoverSelect(true);
        }}
        onMouseLeave={() => {
          setHoverSelect(false);
        }}
        src={!hoverSelect ? Circle : CheckCircle}
        alt="circle icon"
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
            <img
              onMouseEnter={() => {
                setHoverCheck(true);
              }}
              onMouseLeave={() => {
                setHoverCheck(false);
              }}
              src={hoverCheck ? CheckLight : CheckDark}
              alt="check icon"
            />
            <img
              onMouseEnter={() => {
                setHoverCancel(true);
              }}
              onMouseLeave={() => {
                setHoverCancel(false);
              }}
              src={hoverCancel ? CancelLight : CancelDark}
              alt="cancel icon"
            />
          </div>
        ) : (
          <input type="text" value={title} className="disabled" disabled />
        )}
      </div>

      <div className="line-center">
        <img
          onMouseEnter={() => {
            setHoverEdit(true);
          }}
          onMouseLeave={() => {
            setHoverEdit(false);
          }}
          onClick={() => {
            setEdit(true);
          }}
          src={!hoverEdit ? Pen : Edit}
          alt="edit icon"
        />

        <img
          onMouseEnter={() => {
            setHoverTrash(true);
          }}
          onMouseLeave={() => {
            setHoverTrash(false);
          }}
          src={!hoverTrash ? Trash : OpenTrash}
          alt="trash icon"
        />
      </div>
    </div>
  );
};

export default TaskCard;

/*

*/
