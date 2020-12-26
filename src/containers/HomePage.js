import React from "react";
import { Link } from "react-router-dom";

// Components
import RedirectButton from "../components/RedirectButton";

const Home = () => {
  return (
    <main className="main-home home-page column-center">
      <div className="titles column-center">
        <p>Welcome on the To-do List Project</p>
        <p>Sign in or sign up to start the experience</p>
      </div>
      <div className="buttons line-center">
        <RedirectButton page="/signin" text="Sign in" connection />
        <RedirectButton page="/signup" text="Sign up" connection />
      </div>
    </main>
  );
};

export default Home;
