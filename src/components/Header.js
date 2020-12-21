import React from "react";

// Icons
import checklist from "../assets/icons/checklists.svg";

const Header = () => {
  return (
    <div className="header ">
      <div className="container">
        <div className="line-center">
          <img src={checklist} className="icon" />
          <h1>To-do List</h1>
        </div>

        <div className="line-center">
          <p>DATE</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
