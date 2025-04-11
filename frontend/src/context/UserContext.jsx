import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const backendUrl = "http://localhost:8080";

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const value = {
    token,
    setToken,
    backendUrl,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
