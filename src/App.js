import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";
import BoardsPage from "./containers/BoardsPage";
import BoardPage from "./containers/BoardPage";

// Components
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
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
      </Switch>
    </Router>
  );
};

export default App;
