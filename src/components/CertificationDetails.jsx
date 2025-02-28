import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5005";

const CertificationDetails = () => {
  const [certification, setCertification] = useState([])
const {certificationId} = useParams()

useEffect(() => {
  async function getCertification() {
    const oneCertification = await axios.get(`${BACKEND_URL}/certifications/${certificationId}`)
    console.log(oneCertification)
    setCertification(oneCertification)
  }
  getCertification()
}, [certificationId])


  return (
    <div className="certificationDetail">

    </div>
  )
}
export default CertificationDetails