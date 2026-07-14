import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRIVATE_LOGIN_PATH } from "../constants/privatePaths";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      isAdmin,
    };

    try {
      const response = await axios.post(`${BACKEND_URL}/users/signup`, newUser);
      console.log(response.data);
      if (response) {
        alert("User created successfully");
        nav(PRIVATE_LOGIN_PATH);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="signup auth-page">
      <div className="form-container auth-shell">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            <span>Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
            />
          </label>
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
              placeholder="Create a password"
            />
          </label>
          {/* <label>Admin Status:
          <input
            type="checkbox"
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </label> */}
          <button type="submit">Signup</button>
        </form>
        <Link to="/" className="page-home-link">
          Home
        </Link>
      </div>
    </section>
  );
};
export default SignupPage;
