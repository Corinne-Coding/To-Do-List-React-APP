import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import AddButton from "../components/AddButton";
import Header from "../components/Header";
import RedirectButton from "../components/RedirectButton";
import ErrorMessage from "../components/ErrorMessage";
import LoaderAnimation from "../components/LoaderAnimation";
import CardTitle from "../components/CardTitle";
import TaskCard from "../components/TaskCard";

const BoardPage = ({ handleToken, userToken }) => {
  const history = useHistory();

  const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);
  const [boardId, setBoardId] = useState(history.location.state.boardId);
  const [isLoadingTask, setIsLoadingTask] = useState(false);
  const [addTask, setAddTask] = useState(true);

  // fetch data (tasks) from API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/tasks/${boardId}`,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      // console.log(response.data);
      if (response.data) {
        setTasks(response.data);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      alert("An error occurred");
    }
  };

  // add board
  const handleAddTask = async () => {
    if (newTask.length !== 0) {
      setError(null);
      try {
        setIsLoadingTask(true);

        const response = await axios.post(
          "http://localhost:3000/create/task",
          {
            title: newTask,
            boardId,
          },
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        // console.log(response.data);
        if (response.data) {
          setTimeout(() => {
            setIsLoadingTask(false);
            setNewTask("");
            setAddTask(!setAddTask);
          }, 1500);
        }
      } catch (e) {
        setIsLoadingTask(false);
        setError(error);
      }
    } else {
      setError("emptyTask");
    }
  };

  useEffect(() => {
    fetchData();
  }, [addTask]);

  return (
    <>
      <Header handleToken={handleToken} displayDisconnectButton />

      {isLoading ? (
        <main className="line-center container">
          <LoaderAnimation type="ThreeDots" height={100} width={100} />
        </main>
      ) : (
        <main className="container main-board-page">
          <RedirectButton style="bordered" page="/boards" />

          <h2>{history.location.state.boardTitle}</h2>

          <div className="line-center top-part">
            <div className="input-container column-center">
              <input
                type="text"
                placeholder="Add a task"
                value={newTask}
                maxLength={100}
                onChange={(event) => {
                  setNewTask(event.target.value);
                }}
              />

              <div className="line-center message-container ">
                {error && <ErrorMessage name={error} />}
                {isLoadingTask && (
                  <LoaderAnimation type="Oval" height={20} width={20} />
                )}
              </div>
            </div>
            <AddButton text="Add task" setFunction={handleAddTask} />
          </div>

          <section className="column-center">
            <CardTitle title="To do" />

            {tasks.length > 0 ? (
              tasks.map((task, index) => {
                let isPresent = false;
                if (!task.done) {
                  isPresent = true;
                  if (isPresent) {
                    return <TaskCard key={task._id} title={task.title} />;
                  } else {
                    return <p key={index}>EMPTY</p>;
                  }
                }
              })
            ) : (
              <p>EMPTY</p>
            )}
          </section>

          <section className="column-center">
            <CardTitle title="Done" />
            {tasks.length > 0 ? (
              tasks.map((task, index) => {
                console.log(task);
                let isPresent = false;
                if (task.done) {
                  isPresent = true;
                  if (isPresent) {
                    return <TaskCard key={task._id} title={task.title} />;
                  } else {
                    return <p key={index}>EMPTY</p>;
                  }
                }
              })
            ) : (
              <p>EMPTY</p>
            )}
          </section>
        </main>
      )}
    </>
  );
};

export default BoardPage;
