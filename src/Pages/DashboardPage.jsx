import { Link } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

const DashboardPage = () => {
  const { handleLogout } = useContext(AuthContext)
  return (
    <div className="dashboardPage">
        <Link to="/add-project">
            <button>Add Project</button>
        </Link>
        <Link to="/add-certification">
            <button>Add Certification</button>
        </Link>
        <Link to="/dashboard/all-certifications">
          <button>All Certifications</button>
        </Link>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
export default DashboardPage