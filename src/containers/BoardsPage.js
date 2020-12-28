import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import AddBoardButton from "../components/AddBoardButton";
import BoardCard from "../components/BoardCard";
import Header from "../components/Header";
import LoaderAnimation from "../components/LoaderAnimation";
import Modal from "../components/Modal";

const BoardsPage = ({
  handleToken,
  userToken,
  displayModal,
  setDisplayModal,
}) => {
  const [boards, setBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBoardCreation, setIsLoadingBoardCreation] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/boards", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (title.length !== 0) {
      setError(null);
      try {
        setIsLoadingBoardCreation(true);
        const response = await axios.post(
          "http://localhost:3000/create/board",
          {
            title,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        console.log(response.data);
        if (response.data) {
          setTimeout(() => {
            setIsLoadingBoardCreation(false);
            setDisplayModal(false);
          }, 2000);
        }
      } catch (e) {
        console.log(e.response.data.error);
      }
    } else {
      console.log("01");
      console.log("error");
      setError("missingTitle");
    }
  };

  useEffect(() => {
    fetchData();
  }, [displayModal]);

  return (
    <>
      {displayModal && (
        <Modal
          setFunction={setTitle}
          handleFormSubmit={handleFormSubmit}
          error={error}
          isLoadingBoardCreation={isLoadingBoardCreation}
          disabled={isLoadingBoardCreation ? true : false}
        />
      )}

      <Header handleToken={handleToken} displayDisconnectButton />
      {isLoading ? (
        <main className="line-center container">
          <LoaderAnimation type="ThreeDots" height={100} width={100} />
        </main>
      ) : (
        <main className="column-center main-boards-page container">
          <AddBoardButton setDisplayModal={setDisplayModal} />

          <div className="boards-card-container">
            {boards.map((board, index) => {
              return <BoardCard key={index} boardInfos={board} />;
            })}
          </div>
        </main>
      )}
    </>
  );
};

export default BoardsPage;
