import React, { createContext, useState } from "react";

// Create Context
export const AppContext = createContext();



const AppProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userType, setUserType] = useState(localStorage.getItem("userType") || null);

  return (
    <AppContext.Provider value={{ token, setToken, userType, setUserType, backendUrl }}>
      {children}
    </AppContext.Provider>
  );
};




export default AppProvider;
