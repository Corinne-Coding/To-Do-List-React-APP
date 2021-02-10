import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Containers
import BoardPage from "./containers/BoardPage";
import BoardsPage from "./containers/BoardsPage";
import HomePage from "./containers/HomePage";
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";

// Components
import Footer from "./components/Footer";

const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTokenAndName();
  }, []);

  // function to get token & name from cookies
  const fetchTokenAndName = async () => {
    const token = await Cookies.get("to-do-list-token");
    const name = await Cookies.get("to-do-list-name");
    if (token && name) {
      setUserToken(token);
      setUserName(name);
    } else {
      setUserToken(null);
      setUserName(null);
    }
    setIsLoading(false);
  };

  // function to save or remove token from cookies
  const handleTokenAndName = async (token, name) => {
    if (token && name) {
      await Cookies.set("to-do-list-token", token);
      await Cookies.set("to-do-list-name", name);
      setUserToken(token);
      setUserName(name);
    } else {
      await Cookies.remove("to-do-list-token");
      await Cookies.remove("to-do-list-name");
      setUserToken(null);
      setUserName(null);
    }
    return true;
  };

  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignInPage handleTokenAndName={handleTokenAndName} />
        </Route>

        <Route path="/signup">
          <SignUpPage handleTokenAndName={handleTokenAndName} />
        </Route>

        <Route path="/board/:id">
          {userToken ? (
            <BoardPage
              handleTokenAndName={handleTokenAndName}
              userToken={userToken}
              userName={userName}
            />
          ) : (
            <HomePage />
          )}
        </Route>

        <Route path="/">
          {userToken && !isLoading ? (
            <BoardsPage
              handleTokenAndName={handleTokenAndName}
              userToken={userToken}
              userName={userName}
            />
          ) : (
            <HomePage />
          )}
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;

/*

A faire: 

- + d'infos dans chaque board : tps passé depuis création + nb de tasks done / todo

- responsive

- cleaning : remove console.log + ordre alpha + ajout commentaires

*/
