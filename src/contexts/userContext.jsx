import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import auth from "../components/Firebase";
// import firebase from "firebase/app";

const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    auth.onAuthStateChanged((curUser) => {
      if (curUser) {
        setFirebaseUser(curUser);
        setIsUserLoggedIn(true);
        history.push("/chatroom");
      }
    });
  }, [firebaseUser, history]);
  const logoutUser = () => {
    auth.signOut().catch((e) => console.log(e.message));
    setIsUserLoggedIn(false);
    history.push("/");
  };
  return (
    <UserContext.Provider value={{ isUserLoggedIn, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
