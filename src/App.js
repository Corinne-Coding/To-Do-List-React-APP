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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchToken();
  }, []);

  // function to get token from cookies
  const fetchToken = async () => {
    const token = await Cookies.get("token");
    if (token) {
      setUserToken(token);
    } else {
      setUserToken(null);
    }
    setIsLoading(false);
  };

  // function to save or remove token from cookies
  const handleToken = async (token) => {
    if (token) {
      await Cookies.set("token", token);
      setUserToken(token);
    } else {
      await Cookies.remove("token");
      setUserToken(null);
    }
    return true;
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

        <Route path="/board/:id">
          {userToken ? (
            <BoardPage handleToken={handleToken} userToken={userToken} />
          ) : (
            <HomePage />
          )}
        </Route>

        <Route path="/">
          {userToken && !isLoading ? (
            <BoardsPage handleToken={handleToken} userToken={userToken} />
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

- rendre boutons non cliquables pendant requêtes

- loader pendant chargement

- message "No board yet"

- afficher modal pour demander confirmation suppression board

- + d'infos dans chaque board

- détecter la touche entrée

- afficher nom du user

- effet de mouvement sur les boards

- cleaning : remove console.log + ordre alpha + ajout commentaires

*/
