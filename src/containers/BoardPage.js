import { useEffect, useState } from "react";
import axios from "axios";

// Components
import AddButton from "../components/AddButton";
import Header from "../components/Header";
import RedirectButton from "../components/RedirectButton";

const BoardPage = ({ handleToken, userToken }) => {
  const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // fetch data (board tasks) from API
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/boards", {
  //       headers: {
  //         Authorization: "Bearer " + userToken,
  //       },
  //     });
  //     // console.log(response.data);
  //     if (response.data) {
  //       setTasks(response.data);
  //     }
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 3000);
  //   } catch (error) {
  //     alert("An error occurred");
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Header handleToken={handleToken} displayDisconnectButton />
      <main class="container main-board-page">
        <div className="line-center">
          <RedirectButton style="bordered" page="/boards" />
          <div className="line-center">
            <AddButton text="Add task" />
          </div>
        </div>
      </main>
    </>
  );
};

export default BoardPage;
