import { useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import axios from "axios";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const AddCertificationForm = () => {
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("");
  const [certificationLink, setCertificationLink] = useState(""); // Image URL state
  const [aquired, setAquired] = useState("")
  const [imageFile, setImageFile] = useState(null); // File state
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!imageFile) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "ml_default"); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dzdrwiugn/image/upload",
        formData
      );

      console.log(response);
      setCertificationLink(response.data.secure_url);
      console.log(certificationLink); // Save Cloudinary image URL in state
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const certificationToAdd = {
      title,
      provider,
      certificationLink,
      aquiredAt: aquired
    };

    console.log(certificationToAdd)
    await axios
      .post(`${BACKEND_URL}/certifications`, certificationToAdd)
      
      .then(alert("Certification added successfuly"))
      .then(
        setTitle(""),
        setProvider(""),
        setCertificationLink(""),
        setAquired(""),
        setImageFile(null)
      );
    // Submit data
  };

  return (
    <div className="addCertificationWrapper">
      <div className="addCertification">
        <h1>Add Certification</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Provider:
            <input
              type="text"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            />
          </label>
          <label>
            Certification Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          <label>
            Date of Certification:
            <input type="date"  onChange={(e) => setAquired(e.target.value)} />
          </label>
          <button
            type="button"
            onClick={handleImageUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>         
          <button type="submit">Add Certification</button>
        </form>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default AddCertificationForm;
