import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/projects`).then((response) => {
      console.log(response.data);
      setProjects(response.data.foundProjects);
    });
  }, []);

  return (
    <section className="projectsPage">
      <h1>Projects</h1>
      <div className="projectsContainer">
        {projects.map((project) => (
          <article key={project._id} className="project-card">
            <div className="project-card-content">
              <h2>{project.title}</h2>
              <div className="project-image-wrapper">
                <img
                  src={project.thumbnail}
                  alt={`Thumbnail of ${project.title}`}
                  loading="lazy"
                />
              </div>
              <Link
                to={`/projects/project-detail/${project._id}`}
                className="project-card-link"
              >
                Details
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Link to="/" className="page-home-link">
        Home
      </Link>
    </section>
  );
};
export default AllProjects;
