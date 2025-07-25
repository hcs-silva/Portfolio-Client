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
    <div className="projectsPage">
      <h1>Projects</h1>
      <div className="projectsContainer">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <div>
              <h2>{project.title}</h2>
              <img src={project.thumbnail} alt="Thumbnail of the project" />
              <Link to={`/projects/project-detail/${project._id}`}>
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};
export default AllProjects;
