import { useState } from "react";

// Icons
import Circle from "../assets/icons/circle.svg";
import CheckCircle from "../assets/icons/check-circle.svg";
import Trash from "../assets/icons/trash.svg";
import OpenTrash from "../assets/icons/open-trash.svg";
import Pen from "../assets/icons/pen.svg";
import Edit from "../assets/icons/edit.svg";

const TaskCard = ({ title }) => {
  const [hoverSelect, setHoverSelect] = useState(false);
  const [hoverTrash, setHoverTrash] = useState(false);
  const [hoverEdit, setHoverEdit] = useState(false);

  return (
    <div className="task-card line-center">
      <div
        onMouseEnter={() => {
          setHoverSelect(true);
        }}
        onMouseLeave={() => {
          setHoverSelect(false);
        }}
      >
        {!hoverSelect ? <img src={Circle} /> : <img src={CheckCircle} />}
      </div>
      <h4>{title}</h4>

      <div className="line-center">
        <div
          onMouseEnter={() => {
            setHoverEdit(true);
          }}
          onMouseLeave={() => {
            setHoverEdit(false);
          }}
        >
          {!hoverEdit ? <img src={Pen} /> : <img src={Edit} />}
        </div>

        <div
          onMouseEnter={() => {
            setHoverTrash(true);
          }}
          onMouseLeave={() => {
            setHoverTrash(false);
          }}
        >
          {!hoverTrash ? <img src={Trash} /> : <img src={OpenTrash} />}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

/*

*/
