import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import AddButton from "../components/AddButton";
import CardTitle from "../components/CardTitle";
import EmptyLine from "../components/EmptyLine";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import LoaderAnimation from "../components/LoaderAnimation";
import RedirectButton from "../components/RedirectButton";
import TaskCard from "../components/TaskCard";

const BoardPage = ({ handleTokenAndName, userToken, userName }) => {
  const history = useHistory();

  // states
  const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);
  const [boardId] = useState(history.location.state?.boardId);
  const [isLoadingTask, setIsLoadingTask] = useState(false);

  // function to add task
  const handleAddTask = async () => {
    if (newTask.length !== 0) {
      setError(null);
      try {
        setIsLoadingTask(true);

        // send data to server
        const response = await axios.post(
          "https://to-do-list-express-api.herokuapp.com/create/task",
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

        // if response
        if (response.data) {
          setIsLoadingTask(false);
          setNewTask("");
        }
      } catch (e) {
        setIsLoadingTask(false);
        setError(error);
      }
    } else {
      setError("emptyTask");
    }
  };

  // function to update task
  const handleUpdateTask = async (id, done, title) => {
    try {
      if (id && (done === true || done === false || title)) {
        setIsLoadingTask(true);

        // create object to send
        const obj = {};
        if (done === true || done === false) {
          obj.done = done;
        } else if (title) {
          obj.title = title;
        }

        // send data to server
        const response = await axios.put(
          `https://to-do-list-express-api.herokuapp.com/update/task/${id}`,
          obj,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );

        // if response
        if (response.data) {
          setIsLoadingTask(false);
        }
      } else {
        return;
      }
    } catch (e) {
      setIsLoadingTask(false);
      alert("An error occurred");
    }
  };

  // function to delete task
  const handleDeleteTask = async (id) => {
    try {
      if (id) {
        setIsLoadingTask(true);

        // send request
        const response = await axios.delete(
          `https://to-do-list-express-api.herokuapp.com/delete/task/${id}`,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );

        // if response
        if (response.data) {
          setIsLoadingTask(false);
        }
      } else {
        return;
      }
    } catch (e) {
      alert("An error occurred");
      setIsLoadingTask(false);
    }
  };

  useEffect(() => {
    // function to fetch data (tasks) from API
    const fetchData = async () => {
      try {
        if (boardId) {
          // request
          const response = await axios.get(
            `https://to-do-list-express-api.herokuapp.com/tasks/${boardId}`,
            {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            }
          );

          // if response
          if (response.data) {
            setTasks(response.data);
            setIsLoading(false);
          }
        } else {
          history.push("/");
        }
      } catch (error) {
        setIsLoading(false);
        alert("An error occurred");
      }
    };

    fetchData();
  }, [isLoadingTask, boardId, userToken, history]);

  return (
    <>
      <Header
        handleTokenAndName={handleTokenAndName}
        displayDisconnectButton
        userName={userName}
      />

      {isLoading ? (
        // loading data from API
        <main className="line-center container">
          <LoaderAnimation type="Circles" height="10vh" width="10vw" />
        </main>
      ) : (
        // data loaded
        <main className="container main-board-page">
          <RedirectButton styled="bordered" page="/boards" />

          <h2>{history.location.state.boardTitle}</h2>

          {/* Input & add task button */}
          <div className="line-center top-part">
            <div className="input-container column-center">
              <input
                type="text"
                placeholder="Add a task"
                value={newTask}
                maxLength={80}
                onChange={(event) => {
                  setNewTask(event.target.value);
                }}
              />

              <div className="line-center message-container">
                {error && <ErrorMessage name={error} />}
                {isLoadingTask && (
                  <LoaderAnimation type="Oval" height="1.8rem" width="1.8rem" />
                )}
              </div>
            </div>
            <AddButton
              text="Add task"
              setFunction={handleAddTask}
              isDisabled={isLoadingTask}
            />
          </div>

          {/* All tasks */}
          <div className="column-center">
            {/* To do tasks */}
            <section className="column-center">
              <CardTitle title="To do" />

              {tasks.todo.length > 0 &&
                tasks.todo.map((task) => {
                  return (
                    <TaskCard
                      key={task._id}
                      title={task.title}
                      taskId={task._id}
                      done={task.done}
                      handleUpdateTask={handleUpdateTask}
                      handleDeleteTask={handleDeleteTask}
                      isLoadingTask={isLoadingTask}
                    />
                  );
                })}

              {tasks.todo.length === 0 && (
                <EmptyLine text="No task to do yet" />
              )}
            </section>

            {/* Done tasks */}
            <section className="column-center">
              <CardTitle title="Done" />
              {tasks.done.length > 0 &&
                tasks.done.map((task) => {
                  return (
                    <TaskCard
                      key={task._id}
                      title={task.title}
                      taskId={task._id}
                      done={task.done}
                      handleUpdateTask={handleUpdateTask}
                      handleDeleteTask={handleDeleteTask}
                      isLoadingTask={isLoadingTask}
                    />
                  );
                })}
              {tasks.done.length === 0 && <EmptyLine text="No task done yet" />}
            </section>
          </div>
        </main>
      )}
    </>
  );
};

export default BoardPage;
