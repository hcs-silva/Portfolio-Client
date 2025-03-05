import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

import Footer from "./Footer";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";
const webToken = localStorage.getItem("authToken");

const AddProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");  
  const [collaboratorList, setCollaboratorList] = useState([]);
  const [collaboratorName, setCollaboratorName] = useState("");
  const [collaboratorLink, setCollaboratorLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [github, setGithub] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageFile, setImageFile] = useState(null); // File state
  const [uploading, setUploading] = useState("");
  const [projectDate, setProjectDate] = useState("");

  const nav = useNavigate();

  const handleAddCollaborator = (e) => {
    e.preventDefault();
    const newCollaborator = {
      name: collaboratorName,
      link: collaboratorLink,
    };
    setCollaboratorList([...collaboratorList, newCollaborator]);
    setCollaboratorName("");
    setCollaboratorLink("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newTechnologies = technologies
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech !== "");

    const newProject = {
      title: projectTitle,
      thumbnail: projectThumbnail,
      collaborators: collaboratorList,
      technologies: newTechnologies,
      githubLink: github,
      liveLink: liveLink,
      description: projectDescription,
      date: projectDate,
    };

    console.log(newProject);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/projects/`,
        newProject,
        { headers: { authorization: `${webToken}` } }
      );
      if (response) {
        alert("Project Added Sucessfully");
        setProjectTitle("");
        setProjectThumbnail("");
        setTechnologies("");
        setGithub("");
        setLiveLink("");
        setProjectDescription("");
        setImageFile(null);
        setUploading("");
        setProjectDate("");

        nav("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleImageChange(e) {
    setImageFile(e.target.files[0]);
  }

  const handleImageUpload = async () => {
    if (!imageFile) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "ml_default"); //Cloudinary upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dzdrwiugn/image/upload",
        formData
      );

      console.log(response);
      setProjectThumbnail(response.data.secure_url);
      console.log(projectThumbnail); // Save Cloudinary image URL in state
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="addProjectWrapper">
      <div className="addCertification">
        <h1>Add Project</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
          </label>
          <label>
            Project Tumbnail:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <label>
            Project Description:
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>
          </label>
          <label>
            Technologies Used:
            <input
              type="text"
              value={technologies}
              onChange={(e) => {
                setTechnologies(e.target.value);
              }}
            />
          </label>
          <div className="collaborator">
            <h2>Collaborators: </h2>
            <ul  value={collaboratorList} onChange={(e) => {setCollaboratorList(e.target.value)}}>{collaboratorList.map((collaborator, index) => (
              <li key={index}>
                {collaborator.name} <a href={collaborator.link}><BsLinkedin size="0.5em" /></a>
              </li>
            ))}
            </ul>
            <label>
              Collaborator Name:
              <input
                type="text"
                value={collaboratorName}
                onChange={(e) => {
                  setCollaboratorName(e.target.value);
                }}
              />
            </label>
            <label>
              Collaborator Link:
              <input
                type="text"
                value={collaboratorLink}
                onChange={(e) => setCollaboratorLink(e.target.value)}
              />
            </label>
            <button onClick={handleAddCollaborator}>Add Collaborator</button>
          </div>
          <label>
            GitHub Link:
            <input
              type="url"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </label>
          <label>
            Live Link:
            <input
              type="url"
              value={liveLink}
              onChange={(e) => {
                setLiveLink(e.target.value);
              }}
            />
          </label>
          <label>
            Date of Project:
            <input
              type="text"
              onChange={(e) => setProjectDate(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={handleImageUpload}
            disabled={uploading}
            className="back-to-dash"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
          <button type="submit">Add Project</button>
        </form>
      </div>
      <Link to="/dashboard" className="back-to-dash">
        Back to Dashboard
      </Link>
      <Footer />
    </div>
  );
};
export default AddProjectForm;
