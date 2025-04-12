import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { EmployerContext } from "@/context/EmployerContext";
import { UserContext } from "@/context/UserContext";
import { AppContext } from "@/context/AppContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { eToken, setEToken } = useContext(EmployerContext);
  const { token, setToken } = useContext(UserContext);
  const { token: appToken, userType, setToken: setAppToken, setUserType } = useContext(AppContext);

  const isAuthenticated = !!(eToken || token || appToken);
  const isEmployer = userType === "employer";
 

  const handleLogout = () => {
    // Clear localStorage tokens
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    
    // Reset context states
    if (setEToken) setEToken(null);
    if (setToken) setToken(null);
    if (setAppToken) setAppToken(null);
    if (setUserType) setUserType(null);
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Redirect to home page
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  const renderNavLink = (to: string, label: string) => (
    <Link
      to={to}
      onClick={() => setMobileMenuOpen(false)}
      className={`text-sm font-medium ${
        isActive(to) ? "text-blue-600" : "text-gray-600"
      } hover:text-blue-600`}
    >
      {label}
    </Link>
  );

  const renderMobileLink = (to: string, label: string) => (
    <Link
      to={to}
      onClick={() => setMobileMenuOpen(false)}
      className={`block px-4 py-2 text-base font-medium ${
        isActive(to) ? "text-blue-600" : "text-gray-700"
      } hover:bg-gray-100`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-brand-600 text-white flex items-center justify-center font-bold text-lg mr-2">
              S
            </div>
            <span className="text-xl font-bold text-gray-900">SkillMatch</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {isAuthenticated ? (
              <>
                {!isEmployer && renderNavLink("/for-candidate", "For Candidates")}
                {isEmployer && renderNavLink("/for-employers", "For Employers")}
                {!isEmployer && renderNavLink("/challenges", "Challenges")}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="ml-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
              <div className="h-9">
                <Button variant="outline" size="sm" className=" hover:bg-brand-500 " asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                </div>
                <div className="h-9">
                <Button size="sm" className="bg-brand-600  hover:bg-brand-500 " asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
          {isAuthenticated ? (
            <>
              {!isEmployer && renderMobileLink("/for-candidate", "For Candidates")}
              {isEmployer && renderMobileLink("/for-employers", "For Employers")}
              {!isEmployer && renderMobileLink("/challenges", "Challenges")}
              
    
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {renderMobileLink("/login", "Log in")}
              {renderMobileLink("/signup", "Sign up")}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;