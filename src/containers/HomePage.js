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
        <div>
          <Link to="/signin">
            <p>Sign in</p>
          </Link>
        </div>

        <div>
          <Link to="/signup">
            <p>Sign up</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
