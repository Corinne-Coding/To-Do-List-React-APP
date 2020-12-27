import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import AddBoardButton from "../components/AddBoardButton";
import Header from "../components/Header";
import LoaderAnimation from "../components/LoaderAnimation";

const BoardsPage = ({ handleToken, userToken }) => {
  const [boards, setBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/boards", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });

      if (response.data) {
        setBoards(response.data);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header handleToken={handleToken} displayDisconnectButton />
      {isLoading ? (
        <main className="line-center">
          <LoaderAnimation />
        </main>
      ) : (
        <main>
          {boards.length === 0 ? (
            <AddBoardButton />
          ) : (
            boards.map(() => {
              return <div>un board</div>;
            })
          )}
        </main>
      )}
    </>
  );
};

export default BoardsPage;
