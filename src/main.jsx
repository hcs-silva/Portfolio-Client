import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthWrapper } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  
    <Router>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </Router>
  
);
