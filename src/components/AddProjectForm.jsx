import { useState } from "react";
import { Link } from "react-router-dom";
import gitHubstd from "../assets/github-mark.svg";
import gitHubWhi from "../assets/github-mark-white.svg";
import css from "../assets/css-icon.svg"
import html from "../assets/html-icon.svg";
import js from "../assets/javascript.svg";
import reactIcon from "../assets/react-js-icon.svg";
import nodeIcon from "../assets/node-js-icon.svg";
import mongodb from "../assets/mongodb-icon.svg";
import Footer from "./Footer";

const AddProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectThumbnail, setProjectThumbnail] = useState("");
  const [collaboratorInput, setCollaboratorInput] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [github, setGithub] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageFile, setImageFile] = useState(null); // File state
  const [uploading, setUploading] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newCollaborators = collaboratorInput
      .split(",")
      .map((name) => name.trim()) // Remove spaces around names
      .filter((name) => name !== ""); // Remove empty strings

    const newProject = {
      title: projectTitle,
      thumbnail: projectThumbnail,
      collaborators: newCollaborators,
      github: github,
      liveLink: liveLink,
      description: projectDescription,
    };
  }

  function handleImageChange(e) {
    setImageFile(e.target.files[0]);
  }

  // Function to add multiple collaborators at once
  const addCollaborators = () => {
    if (collaboratorInput.trim() !== "") {
      // Split input by commas, remove spaces, and filter out empty values

      setCollaborators([...collaborators, ...newCollaborators]);
      setCollaboratorInput(""); // Clear input after adding
    }
  };

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
            Collaborators:
            <input
              type="text"
              value={collaboratorInput}
              onChange={(e) => {
                setCollaboratorInput(e.target.value);
              }}
            />
          </label>
          <label>
            Date of Project:
            <input type="date" onChange={(e) => setAquired(e.target.value)} />
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
      <Footer/>
    </div>
  );
};
export default AddProjectForm;
