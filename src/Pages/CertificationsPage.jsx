import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const CertificationsPage = () => {
  const [certifications, setCertifications] = useState([]);
  const{authenticateUser} = useContext(AuthContext)

  useEffect(() => {
    authenticateUser();
  }, []);
  
  useEffect(() => {
    axios.get(`${BACKEND_URL}/certifications`).then((response) => {
      // console.log(response.data);
      setCertifications(response.data.foundCertifications);
    });
  }, []);



  return (
    <>
      <div className="certificationsPage">
        <h1>Certifications</h1>
        <div className="certificationsContainer">
          {certifications.map((certification) => (
           
              <div className="certification-card" key={certification._id}>
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
            
          ))}
        </div>
        <Link to="/" >Home</Link>
      </div>
    </>
  );
};
export default CertificationsPage;
