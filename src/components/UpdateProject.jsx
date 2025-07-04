import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";
const webToken = localStorage.getItem("authToken");

const UpdateProject = () => {
  const { projectId } = useParams();

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

  // Fetch project details and populate form fields
  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/projects/${projectId}`,
          {
            headers: { authorization: `Bearer ${webToken}` },
          }
        );
        const data = response.data;
        console.log(data.foundProject);
        setProjectTitle(data.foundProject.title || "");
        setProjectThumbnail(data.foundProject.thumbnail || "");
        setCollaboratorList(
          Array.isArray(data.foundProject.collaborators)
            ? data.foundProject.collaborators
            : []
        );
        setCollaboratorName("");
        setCollaboratorLink("");
        setTechnologies(
          Array.isArray(data.foundProject.technologies)
            ? data.foundProject.technologies.join(", ")
            : data.foundProject.technologies || ""
        );
        setGithub(data.foundProject.githubLink || "");
        setLiveLink(data.foundProject.liveLink || "");
        setProjectDescription(data.foundProject.description || "");
        setProjectDate(data.foundProject.date || "");
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }
    fetchProject();
  }, [projectId]);

  function handleImageChange(e) {
    setImageFile(e.target.files[0]);
  }

  const handleAddCollaborator = (e) => {
    e.preventDefault();
    if (!collaboratorName.trim() && !collaboratorLink.trim()) return;
    setCollaboratorList([
      ...collaboratorList,
      { name: collaboratorName.trim(), link: collaboratorLink.trim() },
    ]);
    setCollaboratorName("");
    setCollaboratorLink("");
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

  function handleUpdate(e) {
    e.preventDefault();
    // Logic to handle project update
    const newProject = {
      title: projectTitle,
      thumbnail: projectThumbnail,
      collaborators: collaboratorList,
      technologies: technologies.split(",").map((tech) => tech.trim()),
      githubLink: github,
      liveLink: liveLink,
      description: projectDescription,
      date: projectDate,
    };

    const updateProject = async () => {
      try {
        const response = await axios.put(
          `${BACKEND_URL}/projects/update-project/${projectId}`,
          newProject,
          { headers: { authorization: `Bearer ${webToken}` } }
        );
        if (response) {
          alert("Project Updated Successfully");          
        }
      } catch (error) {
        console.error("Error updating project:", error);
      }
    }
    updateProject();
  }

  return (
    <div>
      {" "}
      <form onSubmit={handleUpdate}>
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
          <ul>
            {collaboratorList.map((collaborator, index) => (
              <li key={index}>
                {collaborator.name}{" "}
                <a href={collaborator.link}>
                  <BsLinkedin size="0.5em" />
                </a>
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
            value={projectDate}
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
        <button type="submit">Update Project</button>
      </form>
      <Link to={`/projects/project-detail/${projectId}`}>
        Back to Project Details
      </Link>
    </div>
  );
};
export default UpdateProject;
