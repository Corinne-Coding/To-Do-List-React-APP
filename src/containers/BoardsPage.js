import { useEffect, useState } from "react";
import axios from "axios";

// Components
import AddBoardButton from "../components/AddBoardButton";
import BoardCard from "../components/BoardCard";
import Header from "../components/Header";
import LoaderAnimation from "../components/LoaderAnimation";
import Modal from "../components/Modal.js";

const BoardsPage = ({ handleToken, userToken }) => {
  // States
  const [boards, setBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBoard, setIsLoadingBoard] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [displayAddBoardModal, setDisplayAddBoardModal] = useState(false);
  const [displayUpdateBoardModal, setDisplayUpdateBoardModal] = useState(false);
  const [id, setId] = useState(null);
  const [titleToUpdate, setTitleToUpdate] = useState("");

  // fetch data (user's boards) from API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/boards", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      // console.log(response.data);
      if (response.data) {
        setBoards(response.data);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      alert("An error occurred");
    }
  };

  // add board
  const handleCreationBoardSubmit = async (event) => {
    event.preventDefault();
    if (title.length !== 0) {
      setError(null);
      try {
        setIsLoadingBoard(true);
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
        if (response.data) {
          setTimeout(() => {
            setIsLoadingBoard(false);
            setDisplayAddBoardModal(false);
            setTitle("");
          }, 1500);
        }
      } catch (e) {
        setIsLoadingBoard(false);
        setError(error);
      }
    } else {
      setError("missingTitle");
    }
  };

  // update board title
  const handleUpdateBoardSubmit = async (event) => {
    event.preventDefault();
    if (titleToUpdate.length !== 0) {
      setError(null);
      try {
        setIsLoadingBoard(true);
        const response = await axios.put(
          `http://localhost:3000/update/board/${id}`,
          {
            title: titleToUpdate,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        if (response.data) {
          setTimeout(() => {
            setIsLoadingBoard(false);
            setDisplayUpdateBoardModal(false);
            setTitleToUpdate("");
            setId(null);
          }, 2000);
        }
      } catch (e) {
        setIsLoadingBoard(false);
        setError(error);
      }
    } else {
      setError("missingTitle");
    }
  };

  // remove board
  const handleRemoveBoard = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete/board/${id}`,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      if (response.data) {
        fetchData();
      }
    } catch (e) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [displayAddBoardModal, displayUpdateBoardModal]);

  return (
    <>
      {displayAddBoardModal ? (
        <Modal
          setFunction={setTitle}
          handleFormSubmit={handleCreationBoardSubmit}
          error={error}
          isLoadingBoard={isLoadingBoard}
          disabled={isLoadingBoard ? true : false}
          setDisplayModal={setDisplayAddBoardModal}
          title="Add a board"
          inputType="text"
          inputPlaceholder="title"
          buttonText="Create board"
        />
      ) : displayUpdateBoardModal ? (
        <Modal
          setFunction={setTitleToUpdate}
          handleFormSubmit={handleUpdateBoardSubmit}
          error={error}
          isLoadingBoard={isLoadingBoard}
          disabled={isLoadingBoard ? true : false}
          setDisplayModal={setDisplayUpdateBoardModal}
          title="Update a board"
          inputType="text"
          inputValue={titleToUpdate}
          buttonText="Update board"
        />
      ) : null}

      <Header handleToken={handleToken} displayDisconnectButton />
      {isLoading ? (
        <main className="line-center container">
          <LoaderAnimation type="ThreeDots" height={100} width={100} />
        </main>
      ) : (
        <main className="column-center main-boards-page container">
          <AddBoardButton setDisplayModal={setDisplayAddBoardModal} />

          <div className="boards-card-container">
            {boards.map((board, index) => {
              return (
                <BoardCard
                  key={index}
                  boardInfos={board}
                  setDisplayModal={setDisplayUpdateBoardModal}
                  setId={setId}
                  setTitleToUpdate={setTitleToUpdate}
                  handleRemoveBoard={handleRemoveBoard}
                />
              );
            })}
          </div>
        </main>
      )}
    </>
  );
};

export default BoardsPage;
