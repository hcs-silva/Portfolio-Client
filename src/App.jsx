import AddCertificationForm from "./components/AddCertificationForm";
import AddProjectForm from "./components/AddProjectForm";
import AllCertifications from "./components/AllCertifications";
import AboutPage from "./Pages/AboutPage";
import CertificationsPage from "./Pages/CertificationsPage";
import DashboardPage from "./Pages/DashboardPage";
import LandingPage from "./Pages/LandingPage";

import ProjectDetails from "./components/ProjectDetails";
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import NoAdminPage from "./Pages/NoAdminPage";
import AdminRoute from "./components/AdminRoute";
import NotFoundPage from "./Pages/NotFoundPage";
import UpdateCertification from "./components/UpdateCertification";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="layout">
      <main className="main-content">
      <Routes>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/home" element = {<NoAdminPage/>}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/certifications" element={<CertificationsPage />}></Route>
        <Route
          path="/projects/project-detail/:projectId"
          element={<ProjectDetails />}
        ></Route>
        <Route path="/update-certification" element= {<AdminRoute><UpdateCertification/></AdminRoute>}></Route>
        <Route path="/dashboard" element={<AdminRoute><DashboardPage /></AdminRoute>}></Route>
        <Route path="/add-project" element={<AdminRoute><AddProjectForm /></AdminRoute>}></Route>
        <Route
          path="/add-certification"
          element={<AdminRoute><AddCertificationForm /></AdminRoute>}
        ></Route>
        <Route
          path="/dashboard/all-certifications"
          element={<AdminRoute><AllCertifications /></AdminRoute>}
        ></Route>
        <Route
          path="/all-projects"
          element={<AllProjects />}
        ></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
