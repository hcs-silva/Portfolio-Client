import { useContext } from "react";
import { Hourglass } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Spinner = () => {

  const {isAdmin, isLoggedIn} = useContext(AuthContext);

console.log(isLoggedIn)
  return (
    <>
      <div className="spinner">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
        colors={["var(--header-text-color)", "var(--hovers)"]}

        />
      {isLoggedIn ? (isAdmin ? <Link to="/dashboard">Dashboard</Link> : <Link to= "/">Home</Link>) : <Link to="/login">Login</Link>}
      </div>
    </>
  );
};
export default Spinner;
