import React from "react";

// Components
import Header from "../components/Header";

const BoardsPage = ({ handleToken }) => {
  return (
    <>
      <Header handleToken={handleToken} displayDisconnectButton />
      <div>BOARDS Page</div>
    </>
  );
};

export default BoardsPage;
