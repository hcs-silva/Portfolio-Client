import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { PRIVATE_LOGIN_PATH } from "../constants/privatePaths";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [ownerAccessKey, setOwnerAccessKey] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const nav = useNavigate();
  const { authenticateUser, handleLogout } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = {
      email: email,
      password: password,
      ownerAccessKey,
    };

    try {
      setAuthMessage("");
      const response = await axios.post(
        `${BACKEND_URL}/users/login`,
        userToLogin,
      );

      console.log("Login response data:", response.data);

      localStorage.setItem("authToken", response.data.authToken);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("isAdmin", response.data.isAdmin);

      //TODO: add renderization of the message instead of the alerts

      console.log(response.data.message);

      await authenticateUser();
      alert("Login Successful!");

      nav("/dashboard");
      setTimeout(handleLogout, 10800000);
    } catch (error) {
      console.log(error);
      const statusCode = error?.response?.status;

      if (statusCode === 401 || statusCode === 403) {
        setAuthMessage("Authentication failed. Access is restricted.");
      } else {
        setAuthMessage("Unable to login right now. Please try again shortly.");
      }
    }
  }

  return (
    <section className="login auth-page">
      <div className="form-container auth-shell">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="auth-form">
          <label>
            <span>Email</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          <label>
            <span>Owner Access Key</span>
            <input
              type="password"
              value={ownerAccessKey}
              onChange={(e) => setOwnerAccessKey(e.target.value)}
              placeholder="Enter owner access key"
            />
          </label>
          {authMessage && (
            <p className="form-feedback form-feedback--error">{authMessage}</p>
          )}
          <button type="submit">Login</button>
        </form>
        <Link to={`/`} className="page-home-link">
          Home
        </Link>
      </div>
    </section>
  );
};
export default LoginPage;
