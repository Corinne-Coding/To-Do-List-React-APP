import React from "react";
import { Link } from "react-router-dom";

const RedirectButton = ({ text, page, connection }) => {
  return (
    <Link to={page}>
      <div className={connection ? "connection-button" : "redirect-button"}>
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default RedirectButton;
