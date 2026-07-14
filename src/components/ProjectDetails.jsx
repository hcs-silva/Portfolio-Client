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
  const { authenticateUser, isLoggedIn } = useContext(AuthContext);
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
    JavaScript: <DiJavascript size="2em" />,
    React: <DiReact size="2em" />,
    HTML: <DiHtml5 size="2em" />,
    CSS: <DiCss3 size="2em" />,
    Node: <DiNodejs size="2em" />,
    MongoDB: <DiMongodb size="2em" />,
    Express: <SiExpress size="2em" />,
    GitHub: <IoLogoGithub size="2em" />,
  };

  return (
    <section className="projectDetail">
      <h1>Project Details</h1>
      {oneProject ? (
        <article className="project-detail-card">
          <div className="top-detail">
            <h2>{oneProject.title}</h2>
            <img
              src={oneProject.thumbnail}
              alt={`${oneProject.title} preview`}
            />
          </div>

          <div className="bottom-detail">
            <div className="detail-block">
              <h3>Description</h3>
              <p>{oneProject.description}</p>
            </div>

            <div className="detail-block">
              <h3>Collaborators</h3>
              <ul className="collaborators-list">
                {oneProject.collaborators.map((collaborator, index) => (
                  <li key={index}>
                    {collaborator.name}
                    <a
                      href={collaborator.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`LinkedIn profile for ${collaborator.name}`}
                    >
                      <BsLinkedin size="0.5em" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h3>Technologies Used</h3>
              <ul className="tech-list">
                {oneProject.technologies.map((tech, index) => (
                  <li key={index} className="tech-pill">
                    {techIcons[tech] ? techIcons[tech] : null}
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links">
              <a
                href={oneProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open project repository"
              >
                <IoLogoGithub />
              </a>
              <a
                href={oneProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open project live website"
              >
                <CiGlobe />
              </a>
            </div>

            {isLoggedIn && (
              <Link
                to={`/projects/update-project/${projectId}`}
                id="edit-project"
              >
                Edit Project
              </Link>
            )}
          </div>
        </article>
      ) : (
        <div className="project-loading">Loading Project...</div>
      )}

      <Link to="/all-projects" id="dashboard" className="page-home-link">
        Back to Projects
      </Link>
    </section>
  );
};
export default ProjectDetails;
