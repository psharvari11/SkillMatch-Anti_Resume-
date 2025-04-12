import React, { useContext } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import ForCandidates from "./pages/Candidate/ForCandidates";
import ForEmployers from "./pages/Employer/ForEmployers";
import Challenges from "./pages/Candidate/Challenges";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { EmployerContext } from "./context/EmployerContext";
import { UserContext } from "./context/UserContext";
import { AppContext } from "./context/AppContext";
import ChallengeDetail from "./pages/Candidate/ChallengeDetail";
import CandidateDashboard from "./pages/Candidate/CandidateDashboard";

const queryClient = new QueryClient();

const App = () => {
  const { eToken } = useContext(EmployerContext);
  const { token } = useContext(UserContext);
  const { token: appToken, userType } = useContext(AppContext);

  const isAuthenticated = eToken || token || appToken;
  const isEmployer = userType === "employer";

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              {/* Public Landing Page */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup/>} />

              {isAuthenticated ? (
                <>
                  {/* Authenticated Routes */}
                  {isEmployer ? (
                    <Route path="/for-employers" element={<ForEmployers />} />
                  ) : (
                    <>
                      <Route path="/for-candidate" element={<ForCandidates />} />
                      <Route path="/challenges" element={<Challenges />} />
                      <Route path="/challenges/:id" element={<ChallengeDetail />} />
                      <Route path="/candidate-dashboard" element={<CandidateDashboard/>} />
                    </>
                  )}
                </>
              ) : (
                <>
                  {/* Public authentication routes */}
                  
                  {/* Redirect other private routes to login */}
                  <Route path="/for-employers" element={<Navigate to="/login" replace />} />
                  <Route path="/for-candidate" element={<Navigate to="/login" replace />} />
                  <Route path="/challenges" element={<Navigate to="/login" replace />} />
                </>
              )}

              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
