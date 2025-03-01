import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const AuthContext = createContext();

const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const nav = useNavigate();

  const authenticateUser = async () => {
    const webToken = localStorage.getItem("authToken");

    if (webToken) {
      try {
        console.log("Authenticating user...");
        const responseToVerify = await axios.get(
          `${BACKEND_URL}/users/verify`,
          {
            headers: { authorization: `Bearer ${webToken}` },
            timeout: 5000,
          }
        );
        console.log("User authenticated:", responseToVerify.data);
        setUser(responseToVerify.data.currentUser);
        setIsAdmin(responseToVerify.data.currentUser.isAdmin);
        setIsLoggedIn(true);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        console.log("Error validating the token");
        setIsLoading(false);
        setIsLoggedIn(false);
        setUser(null);
      }
    } else {
      console.log("Not token present");
      setIsLoading(false);
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  function handleLogout() {
    console.log("Logged Out");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    nav("/");
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoggedIn,
        isAdmin,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthWrapper };
