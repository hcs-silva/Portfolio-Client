import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const nav = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
        username,
        email,
        password,
        isAdmin
    }

    try {
        const response = await axios.post(`${BACKEND_URL}/users/signup`, newUser)
        console.log(response.data);
        if(response) {
            alert("User created successfully");
            nav("/login")     
        }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>Email: 
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>Password: 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/* <label>Admin Status:
          <input
            type="checkbox"
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </label> */}
        <button>Signup</button>
      </form>
    </div>
  );
};
export default SignupPage;
