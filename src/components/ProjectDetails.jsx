import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";
import {
  DiJavascript,
  DiReact,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { BsLinkedin } from "react-icons/bs";

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

  const techIcons = {
    JavaScript: <DiJavascript size="2em"/>,
    React: <DiReact size="2em"/>,
    HTML: <DiHtml5 size="2em"/>,
    CSS: <DiCss3 size="2em"/>,
    Node: <DiNodejs size="2em"/>,
    MongoDB: <DiMongodb size="2em"/>,
    Express: <SiExpress size="2em"/>,
    GitHub: <IoLogoGithub size="2em"/>,    
  };

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
            <p>
              {" "}
              <em>Description:</em> {oneProject.description}
            </p>
            <p className="collaborators">
              <em>Collaborators: </em>
              <ul>
              {oneProject.collaborators.map((collaborator, index) => (
                <li key={index}>{collaborator.name}<a href={collaborator.link}><BsLinkedin size="0.5em"/></a></li>
              ))}
              </ul>
            </p>
            <p>
              {" "}
              <em>Technologies Used:</em>{" "}
              {oneProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  style={{
                    marginRight: "1px",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  {techIcons[tech] ? techIcons[tech] : null}
                  <span style={{ marginLeft: "5px" }}>{tech}</span>
                </span>
              ))}
            </p>
            <div className="links">
              <a
                href={oneProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub />
              </a>
              <a
                href={oneProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiGlobe />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Project...</div>
      )}
      <Link to="/dashboard" id="dashboard">
        Back to Dashboard
      </Link>
    </div>
  );
};
export default ProjectDetails;
