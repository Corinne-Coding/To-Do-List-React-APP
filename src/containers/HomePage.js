import { useState } from "react";

// Animation from https://animate.style/
import "animate.css";

// Components
import ConnectionButton from "../components/ConnectionButton";

const Home = () => {
  const [animated, setAnimated] = useState(false);

  return (
    <main className="main-home home-page column-center container">
      <div className="titles column-center">
        <p
          onMouseEnter={() => {
            setAnimated(true);
          }}
          onMouseLeave={() => {
            setAnimated(false);
          }}
          className={animated ? "animate__animated animate__pulse" : undefined}
        >
          Welcome on the <br />
          To-do List <br />
          Project
        </p>
        <p>
          Sign in or sign up <br />
          to start the experience
        </p>
      </div>
      <div className="buttons-line line-center">
        <ConnectionButton page="/signin" text="Sign in" />
        <ConnectionButton page="/signup" text="Sign up" />
      </div>
    </main>
  );
};

export default Home;
