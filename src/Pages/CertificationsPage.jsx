import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const CertificationsPage = () => {
  const [certifications, setCertifications] = useState([]);
  useEffect(() => {
    axios.get(`${BACKEND_URL}/certifications`).then((response) => {
      console.log(response.data);
      setCertifications(response.data.foundCertifications);
    });
  }, []);



  return (
    <>
      <div className="certificationsPage">
        <h1>Certifications</h1>
        <div className="certificationsContainer">
          {certifications.map((certification) => (
            <Link
              to={`/certifications/certification-detail/${certification._id}`}
              key={certification._id}
            >
              <div className="certification-card">
                <div>
                  <img
                    src={certification.certificationLink}
                    alt="certificate preview"
                  />
                  <p>
                    <em>Title:</em> {certification.title}
                  </p>
                  <h3>
                    <em>Provider:</em> {certification.provider}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default CertificationsPage;
