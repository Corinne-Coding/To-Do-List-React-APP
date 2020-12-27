import React, { useState } from "react";

// Icons
import list from "../assets/icons/list.svg";

// Functions
import displayDate from "../assets/functions/displayDate";

const Header = ({ handleToken, displayDisconnectButton }) => {
  const [date, setDate] = useState(displayDate());
  return (
    <div className="header">
      <div className="container">
        <div className="line-center">
          <img src={list} className="icon" alt="icon" />
          <h1>To-do List</h1>
        </div>

        <div className="line-center">
          <div className="line-center">
            <p className="date">{date}</p>
          </div>

          {displayDisconnectButton && (
            <div
              onClick={() => {
                handleToken();
              }}
              className="disconnect-btn"
            >
              Déconnexion
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
