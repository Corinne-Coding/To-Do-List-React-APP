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
import EmptyLine from "../components/EmptyLine";

const BoardPage = ({ handleToken, userToken }) => {
  const history = useHistory();

  const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);
  const [boardId] = useState(history.location.state.boardId);
  const [isLoadingTask, setIsLoadingTask] = useState(false);
  const [addTask, setAddTask] = useState(true);
  const [reload, setReload] = useState(false);

  // add task
  const handleAddTask = async () => {
    setReload(false);
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
            setReload(true);
          }, 1000);
        }
      } catch (e) {
        setIsLoadingTask(false);
        setError(error);
      }
    } else {
      setError("emptyTask");
    }
  };

  // update task
  const handleUpdateTask = async (id, done, title) => {
    try {
      if (id && (done === true || done === false || title)) {
        setReload(false);
        const obj = {};
        if (done === true || done === false) {
          obj.done = done;
        } else if (title) {
          obj.title = title;
        }
        const response = await axios.put(
          `http://localhost:3000/update/task/${id}`,
          obj,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        console.log(response.data);
        setReload(true);
      } else {
        return;
      }
    } catch (e) {
      alert("An error occurred");
      setReload(true);
    }
  };

  // delete task
  const handleDeleteTask = async (id) => {
    try {
      if (id) {
        setReload(false);
        const response = await axios.delete(
          `http://localhost:3000/delete/task/${id}`,
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        console.log(response.data);
        setReload(true);
      } else {
        return;
      }
    } catch (e) {
      alert("An error occurred");
      setReload(true);
    }
  };

  useEffect(() => {
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
        }, 1000);
      } catch (error) {
        alert("An error occurred");
      }
    };

    fetchData();
  }, [addTask, reload, boardId, userToken]);

  return (
    <>
      <Header handleToken={handleToken} displayDisconnectButton />

      {isLoading ? (
        <main className="line-center container">
          <LoaderAnimation type="Circles" height="10vh" width="10vw" />
        </main>
      ) : (
        <main className="container main-board-page">
          <RedirectButton styled="bordered" page="/" />

          <h2>{history.location.state.boardTitle}</h2>

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

              <div className="line-center message-container ">
                {error && <ErrorMessage name={error} />}
                {isLoadingTask && (
                  <LoaderAnimation type="Oval" height="1.8rem" width="1.8rem" />
                )}
              </div>
            </div>
            <AddButton text="Add task" setFunction={handleAddTask} />
          </div>

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
                  />
                );
              })}

            {tasks.todo.length === 0 && <EmptyLine text="No task to do yet" />}
          </section>

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
                  />
                );
              })}
            {tasks.done.length === 0 && <EmptyLine text="No task done yet" />}
          </section>
        </main>
      )}
    </>
  );
};

export default BoardPage;
