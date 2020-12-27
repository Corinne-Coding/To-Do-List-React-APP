import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Containers
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";
import BoardsPage from "./containers/BoardsPage";
import BoardPage from "./containers/BoardPage";
import HomePage from "./containers/HomePage";

// Components
import Footer from "./components/Footer";

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchToken();
  }, []);

  // get token from cookies
  const fetchToken = async () => {
    const token = await Cookies.get("token");
    if (token) {
      setUserToken(token);
    } else {
      setUserToken(null);
    }
    setIsLoading(false);
  };

  // save / remove token from cookies
  const handleToken = async (token) => {
    if (token) {
      await Cookies.set("token", token);
      setUserToken(token);
    } else {
      await Cookies.remove("token");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignInPage handleToken={handleToken} />
        </Route>
        <Route path="/signup">
          <SignUpPage handleToken={handleToken} />
        </Route>

        <Route path="/board">
          <BoardPage />
        </Route>

        <Route path="/">
          {isLoading ? null : !userToken ? (
            <HomePage />
          ) : (
            <BoardsPage handleToken={handleToken} userToken={userToken} />
          )}
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
