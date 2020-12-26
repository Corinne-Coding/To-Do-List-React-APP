import React from "react";

// Icons
import list from "../assets/icons/list.svg";

const Header = ({ handleToken, displayDisconnectButton }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="line-center">
          <img src={list} className="icon" alt="icon" />
          <h1>To-do List</h1>
        </div>

        {displayDisconnectButton && (
          <div
            onClick={() => {
              handleToken();
            }}
          >
            Déconnexion
          </div>
        )}

        <div className="line-center">
          <p>DATE</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
