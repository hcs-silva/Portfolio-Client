import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();
  const { authenticateUser, handleLogout } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
    const userToLogin = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${BACKEND_URL}/users/login`,
        userToLogin
      );

      console.log("Login response data:", response.data);

      localStorage.setItem("authToken", response.data.authToken);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("isAdmin", response.data.isAdmin);
      
        //TODO: add renderization of the message instead of the alerts

      console.log(response.data.message)


      await authenticateUser();
      alert("Login Successful!");

      

      nav("/dashboard");
      setTimeout(handleLogout, 10800000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Login</button>
        </form>
          <Link to={`/`}>Home</Link>
      </div>
    </div>
  );
};
export default LoginPage;
