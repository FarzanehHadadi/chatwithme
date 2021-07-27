import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Chatroom from "./pages/Chatroom";
import Navbar from "./components/Navbar";
import { UserProvider } from "./contexts/userContext";
import "./App.css";

const APP = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/chatroom">
              <Chatroom />
            </Route>
          </Switch>
        </UserProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default APP;
