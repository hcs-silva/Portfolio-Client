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

  function handleUpdate() {

  }

  return (
    <>
      <div className="allCertificationsPage">
        <h1> All Certifications</h1>
        <div className="allCertificationsContainer">
          {certifications.map((certification) => (
            <div key={certification._id} className="allCertification-card">
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
                <button onClick={handleUpdate}className="cardButton">Update Button</button>
                <button onClick={handleDelete} className="cardButton">Delete Certification</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AllCertifications;
