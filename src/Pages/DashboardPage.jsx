import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

const DashboardPage = () => {
  const { handleLogout } = useContext(AuthContext)
  return (
    <div className="dashboardPage">
        <Link to="/add-project">
            Add Project
        </Link>
        <Link to="/add-certification">
            Add Certification
        </Link>
        <Link to="/dashboard/all-certifications">
          All Certifications
        </Link>
        <Link to="/all-projects">
          All Projects
        </Link>
        <button onClick={handleLogout} className="dash-logout">Log Out</button>
    </div>
  )
}
export default DashboardPage