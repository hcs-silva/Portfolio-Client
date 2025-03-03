import thumbnail from "/thumbnail.png";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
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
              <div className="layer4"><h2>Hi there!</h2></div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-bottom">
        <div className="action-buttons">
          <NavLink to={`/signup`}>Signup</NavLink>
          <NavLink to={`/login`}>Login</NavLink>
        </div>
       
      </div>
    </div>
  );
};
export default LandingPage;
