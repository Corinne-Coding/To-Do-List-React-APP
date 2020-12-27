import React from "react";
import { Link } from "react-router-dom";

// Components
import RedirectButton from "../components/RedirectButton";
import ConnectionButton from "../components/ConnectionButton";

const Home = () => {
  return (
    <main className="main-home home-page column-center">
      <div className="titles column-center">
        <p>Welcome on the To-do List Project</p>
        <p>Sign in or sign up to start the experience</p>
      </div>
      <div className="buttons-line line-center">
        <ConnectionButton page="/signin" text="Sign in" />
        <ConnectionButton page="/signup" text="Sign up" />
      </div>
    </main>
  );
};

export default Home;
