import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const CertificationsPage = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/certifications`).then((response) => {
      // console.log(response.data);
      setCertifications(response.data.foundCertifications);
    });
  }, []);

  return (
    <section className="certificationsPage">
      <h1>Certifications</h1>
      <div className="certificationsContainer">
        {certifications.map((certification) => (
          <article className="certification-card" key={certification._id}>
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
export default CertificationsPage;
