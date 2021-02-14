import { useEffect, useState } from "react";
import axios from "axios";

// Components
import AddButton from "../components/AddButton";
import BoardCard from "../components/BoardCard";
import EmptyLine from "../components/EmptyLine";
import Header from "../components/Header";
import LoaderAnimation from "../components/LoaderAnimation";
import Modal from "../components/Modal.js";

const BoardsPage = ({ handleTokenAndName, userToken, userName }) => {
  // states
  const [boards, setBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingBoard, setIsLoadingBoard] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const [displayAddBoardModal, setDisplayAddBoardModal] = useState(false);
  const [displayUpdateBoardModal, setDisplayUpdateBoardModal] = useState(false);
  const [displayDeleteBoardModal, setDisplayDeleteBoardModal] = useState(false);
  const [boardInfos, setBoardInfos] = useState(null);
  const [titleToUpdate, setTitleToUpdate] = useState("");

  // function to add board
  const handleAddBoard = async (event) => {
    event.preventDefault();

    if (title.length !== 0) {
      setError(null);
      try {
        setIsLoadingBoard(true);

        // send data to server
        const response = await axios.post(
          "https://to-do-list-express-api.herokuapp.com/create/board",
          {
            title,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );

        // if response
        if (response.data) {
          setTimeout(() => {
            setIsLoadingBoard(false);
            setDisplayAddBoardModal(false);
            setTitle("");
          }, 1000);
        }
      } catch (e) {
        setIsLoadingBoard(false);
        setError(error);
      }
    } else {
      // no title
      setError("missingTitle");
    }
  };

  // function to update board title
  const handleUpdateBoard = async (event) => {
    event.preventDefault();

    if (titleToUpdate.length !== 0) {
      setError(null);
      try {
        setIsLoadingBoard(true);

        // send data to server
        const response = await axios.put(
          `https://to-do-list-express-api.herokuapp.com/update/board/${boardInfos._id}`,
          {
            title: titleToUpdate,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );

        // if response
        if (response.data) {
          setTimeout(() => {
            setIsLoadingBoard(false);
            setDisplayUpdateBoardModal(false);
            setTitleToUpdate("");
            setBoardInfos(null);
          }, 1000);
        }
      } catch (e) {
        setIsLoadingBoard(false);
        setError(error);
      }
    } else {
      // no title
      setError("missingTitle");
    }
  };

  // function to remove board
  const handleRemoveBoard = async (event) => {
    event.preventDefault();
    try {
      setIsLoadingBoard(true);

      // send request
      const response = await axios.delete(
        `https://to-do-list-express-api.herokuapp.com/delete/board/${boardInfos._id}`,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );

      // if response
      if (response.data) {
        setTimeout(() => {
          setIsLoadingBoard(false);
          setDisplayDeleteBoardModal(false);
          setBoardInfos(null);
        }, 1000);
      }
    } catch (e) {
      setError(error);
      setIsLoadingBoard(false);
    }
  };

  useEffect(() => {
    // function to fetch data (boards) from API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://to-do-list-express-api.herokuapp.com/boards",
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );

        // if response
        if (response.data) {
          setBoards(response.data);
          setIsLoading(false);
        } else {
          alert("An error occurred");
        }
      } catch (error) {
        alert("An error occurred");
      }
    };

    fetchData();
  }, [
    displayAddBoardModal,
    displayUpdateBoardModal,
    displayDeleteBoardModal,
    userToken,
  ]);

  return (
    <>
      {displayAddBoardModal ? (
        // modal displayed to add a board
        <Modal
          setFunction={setTitle}
          handleFormSubmit={handleAddBoard}
          error={error}
          isLoadingBoard={isLoadingBoard}
          setDisplayModal={setDisplayAddBoardModal}
          modalType={"add"}
        />
      ) : displayUpdateBoardModal ? (
        // modal displayed to update a board
        <Modal
          setFunction={setTitleToUpdate}
          handleFormSubmit={handleUpdateBoard}
          error={error}
          isLoadingBoard={isLoadingBoard}
          setDisplayModal={setDisplayUpdateBoardModal}
          modalType={"update"}
          inputValue={titleToUpdate}
        />
      ) : displayDeleteBoardModal ? (
        <Modal
          handleFormSubmit={handleRemoveBoard}
          error={error}
          isLoadingBoard={isLoadingBoard}
          setDisplayModal={setDisplayDeleteBoardModal}
          modalType={"delete"}
          boardInfos={boardInfos}
        />
      ) : null}

      <Header
        handleTokenAndName={handleTokenAndName}
        displayDisconnectButton
        userName={userName}
      />

      {isLoading ? (
        // loading data from API
        <main className="line-center container">
          <LoaderAnimation type="ThreeDots" height="6vh" width="6vw" />
        </main>
      ) : (
        // data loaded
        <main className="column-center main-boards-page container">
          <AddButton
            setDisplayModal={setDisplayAddBoardModal}
            text="Add a board"
          />

          {boards.length === 0 ? (
            <div className="mg-top">
              <EmptyLine text="No board yet" centered={true} />
            </div>
          ) : (
            <div className="boards-card-container">
              {boards.map((board, index) => {
                return (
                  <BoardCard
                    key={index}
                    boardInfos={board}
                    setDisplayUpdateBoardModal={setDisplayUpdateBoardModal}
                    setDisplayDeleteBoardModal={setDisplayDeleteBoardModal}
                    setBoardInfos={setBoardInfos}
                    setTitleToUpdate={setTitleToUpdate}
                  />
                );
              })}
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default BoardsPage;
