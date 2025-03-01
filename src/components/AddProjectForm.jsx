import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gitHubstd from "../assets/github-mark.svg";
import gitHubWhi from "../assets/github-mark-white.svg";
import css from "../assets/css-icon.svg";
import html from "../assets/html-icon.svg";
import js from "../assets/javascript.svg";
import reactIcon from "../assets/react-js-icon.svg";
import nodeIcon from "../assets/node-js-icon.svg";
import mongodb from "../assets/mongodb-icon.svg";
import Footer from "./Footer";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";
const webToken = localStorage.getItem("authToken");

const AddProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");
  const [collaborators, setCollaborators] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [github, setGithub] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageFile, setImageFile] = useState(null); // File state
  const [uploading, setUploading] = useState("");
  const [projectDate, setProjectDate] = useState("");

  const nav = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    const newCollaborators = collaborators
      .split(",")
      .map((name) => name.trim()) // Remove spaces around names
      .filter((name) => name !== ""); // Remove empty strings

    const newTechnologies = technologies
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech !== "");

    const newProject = {
      title: projectTitle,
      thumbnail: projectThumbnail,
      collaborators: newCollaborators,
      technologies: newTechnologies,
      githubLink: github,
      liveLink: liveLink,
      description: projectDescription,
      date: projectDate,
    };

    console.log(newProject)

    try {
      const response = await axios.post(
        `${BACKEND_URL}/projects/`,
        newProject,
        { headers: { authorization: `${webToken}` } }
      );
      if(response) {
        alert("Project Added Sucessfully")
        setProjectTitle("");
        setProjectThumbnail("");
        setCollaborators("");
        setTechnologies("");
        setGithub("");
        setLiveLink("");
        setProjectDescription("");
        setImageFile(null);
        setUploading("");
        setProjectDate("");

        nav("/dashboard")
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
          <label>
            Collaborators:
            <input
              type="text"
              value={collaborators}
              onChange={(e) => {
                setCollaborators(e.target.value);
              }}
            />
          </label>
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
            <input type="text" onChange={(e) => setProjectDate(e.target.value)} />
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
