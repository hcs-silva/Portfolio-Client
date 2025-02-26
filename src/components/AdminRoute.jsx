
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"
import Spinner from "./Spinner";
import NotFoundPage from "../Pages/NotFoundPage";


const AdminRoute = ({children}) => {

    const {isLoading, isLoggedIn, isAdmin} = useContext(AuthContext);
    
    if (isLoading) {
        return <Spinner/>
    }
    
    if(!isLoggedIn) {
        return <Navigate to="/login"/>
    }
    
    if(isLoggedIn && !isAdmin) {
        return <NotFoundPage/>
    }
    
  
    return <div>{children}</div>
  
}
export default AdminRoute