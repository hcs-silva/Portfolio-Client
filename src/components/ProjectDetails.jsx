import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";
import github from "../assets/github-mark-white.svg";
import globe from "../assets/globe-svgrepo-com.svg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const ProjectDetails = () => {
  const { authenticateUser } = useContext(AuthContext);
  const { projectId } = useParams();
  const [oneProject, setOneProject] = useState(null);

  useEffect(() => {
    authenticateUser();
  }, []);

  async function getOneProject(id) {
    const webToken = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${BACKEND_URL}/projects/${id}`, {
        headers: { authorization: `Bearer ${webToken}` },
      });
      console.log(response.data);
      setOneProject(response.data.foundProject);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (projectId) {
      getOneProject(projectId);
    }
  }, [projectId]);

  return (
    <div className="projectDetail">
      <h1>Project Details</h1>
      {oneProject ? (
        <div className="project-detail-card">
          <div className="top-detail">
            <h2>{oneProject.title}</h2>
            <img src={oneProject.thumbnail} alt="Project Thumbnail" />
          </div>
          <div className="bottom-detail">
            <p> Description: {oneProject.description}</p>
            <p>Collaborators: 
              {oneProject.collaborators.map((collaborator, index) => (
                <span key={index}>{collaborator}</span>
              ))}
            </p>
            <p> Technologies Used: {oneProject.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
            ))}</p>
            <Link to={oneProject.github} ><img src={github} alt="github logo" /></Link>
            <Link to={oneProject.liveLink} ><img src={globe} alt="world icon" /></Link>
          </div>
        </div>
      ) : (
        <div>Loading Project...</div>
      )}
    </div>
  );
};
export default ProjectDetails;
