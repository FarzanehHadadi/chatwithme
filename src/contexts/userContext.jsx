import React, { useState, useEffect, useContext } from "react";

const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={"{{ test }}"}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
