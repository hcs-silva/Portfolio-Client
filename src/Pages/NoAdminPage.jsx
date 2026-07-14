import thumbnail from "/thumbnail.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const NoAdminPage = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <section className="noAdmin-page">
      <header className="landing-hero">
        <div className="header-text">
          <p className="eyebrow">Logged In Workspace</p>
          <h1>Hernâni Silva</h1>
          <h2>Junior Full Stack Web Developer | MERN Stack</h2>
        </div>

        <div className="hero-photo-frame">
          <img src={thumbnail} alt="Hernâni Silva profile" />
        </div>
      </header>

      <section className="noAdmin-bottom">
        <div className="noAdmin-buttons">
          <button onClick={handleLogout} className="logout-pill">
            Logout
          </button>
        </div>

        <nav className="navButtons" aria-label="Logged in navigation">
          <Link to="/about">About</Link>
          <Link to="/all-projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
        </nav>
      </section>
    </section>
  );
};
export default NoAdminPage;
