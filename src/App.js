import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";
import BoardsPage from "./containers/BoardsPage";
import BoardPage from "./containers/BoardPage";
import HomePage from "./containers/HomePage";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [displayHeader, setDisplayHeader] = useState(false);
  return (
    <Router>
      {displayHeader && <Header />}

      <Switch>
        <Route path="/signin">
          <SignInPage />
        </Route>

        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="/boards">
          <BoardsPage />
        </Route>

        <Route path="/board">
          <BoardPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
