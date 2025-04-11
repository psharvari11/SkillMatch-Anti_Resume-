import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./context/AppContext.jsx"; // ✅ Correct default import
import EmployerContextProvider from "./context/EmployerContext.jsx";
import UserContextProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <EmployerContextProvider>
        <AppProvider> 
          <App />
        </AppProvider>
      </EmployerContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
