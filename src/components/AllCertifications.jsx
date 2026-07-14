import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const AllCertifications = () => {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/certifications`).then((response) => {
      setCertifications(response.data.foundCertifications);
    });
  }, []);

  function handleDelete() {}

  function handleUpdate() {}

  return (
    <section className="certificationsPage">
      <h1>All Certifications</h1>
      <div className="certificationsContainer">
        {certifications.map((certification) => (
          <article
            key={certification._id}
            className="certification-card certification-card-admin"
          >
            <div className="certification-card-content">
              <div className="certification-image-wrapper">
                <img
                  src={certification.certificationLink}
                  alt={`${certification.title} certificate preview`}
                  loading="lazy"
                />
              </div>
              <p>
                <em>Title:</em> {certification.title}
              </p>
              <h3>
                <em>Provider:</em> {certification.provider}
              </h3>
              <div className="certification-actions">
                <Link to={"/update-certification"}>Update</Link>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Link to="/dashboard" className="page-home-link">
        Back to Dashboard
      </Link>
    </section>
  );
};
export default AllCertifications;
