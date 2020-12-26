import React from "react";
import { Link } from "react-router-dom";

// Components

const Home = () => {
  return (
    <main className="main-home home-page column-center">
      <div className="titles column-center">
        <p>Welcome on the To-do List Project</p>
        <p>Sign in or sign up to start the experience</p>
      </div>
      <div className="buttons line-center">
        <Link to="/signin">
          <div>
            <p>Sign in</p>
          </div>
        </Link>

        <Link to="/signup">
          <div>
            <p>Sign up</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
