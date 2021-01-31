import React from "react";

const TaskCard = ({ title }) => {
  return (
    <div className="task-card line-center">
      <p>coche</p>
      <h4>{title}</h4>

      <div className="line-center">
        <p>edit</p>
        <p>trash</p>
      </div>
    </div>
  );
};

export default TaskCard;
