import AddCertificationForm from "./components/AddCertificationForm";
import AddProjectForm from "./components/AddProjectForm";
import AllCertifications from "./components/AllCertifications";
import AboutPage from "./Pages/AboutPage";
import CertificationsPage from "./Pages/CertificationsPage";
import DashboardPage from "./Pages/DashboardPage";
import LandingPage from "./Pages/LandingPage";
import ProjectsPage from "./Pages/ProjectsPage";
import CertificationDetails from "./components/CertificationDetails";
import "./Styles/App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import NoAdminPage from "./Pages/NoAdminPage";
import AdminRoute from "./components/AdminRoute";
import NotFoundPage from "./Pages/NotFoundPage";
import UpdateCertification from "./components/UpdateCertification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/home" element = {<NoAdminPage/>}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/certifications" element={<CertificationsPage />}></Route>
        <Route
          path="/certifications/certification-detail/:certificationId"
          element={<CertificationDetails />}
        ></Route>
        <Route path="/update-certification" element= {<AdminRoute><UpdateCertification/></AdminRoute>}></Route>
        <Route path="/dashboard" element={<AdminRoute><DashboardPage /></AdminRoute>}></Route>
        <Route path="/add-project" element={<AddProjectForm />}></Route>
        <Route
          path="/add-certification"
          element={<AddCertificationForm />}
        ></Route>
        <Route
          path="/dashboard/all-certifications"
          element={<AllCertifications />}
        ></Route>

        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
