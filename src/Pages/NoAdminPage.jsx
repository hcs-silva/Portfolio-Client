import thumbnail from "/thumbnail.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const NoAdminPage = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <div className="noAdmin-page">
      <div className="thumbnail">
        <div className="header-text">
          <h1>Hernâni Silva</h1>
          <h3>Junior Full Stack Web Developer</h3>
          <h4>MERN Stack</h4>
        </div>
        <img src={thumbnail} alt="" />
      </div>
      <div className="landing-main">
        <div className="layer1">
          <div className="layer2">
            <div className="layer3">
              <div className="layer4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="noAdmin-bottom">
        <div className="noAdmin-buttons">
          <button onClick={handleLogout}>Logout</button>
        </div>
        <div className="navButtons">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
        </div>
      </div>
    </div>
  );
};
export default NoAdminPage;
