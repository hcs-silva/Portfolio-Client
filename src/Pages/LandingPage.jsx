import thumbnail from "/thumbnail.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <header className="landing-hero">
        <div className="header-text">
          <p className="eyebrow">MERN Full Stack Developer</p>
          <h1>Hernâni Silva</h1>
          <h2>
            Building robust, user-focused web applications with the MERN stack.
          </h2>
          <p className="hero-section">
            Inspired by nature, focused on craft, and committed to delivering
            reliable digital products with clean architecture and thoughtful UX.
          </p>
        </div>

        <div className="hero-photo-frame">
          <img src={thumbnail} alt="Hernâni Silva, Full Stack Web Developer" />
        </div>
      </header>

      <section
        className="landing-actions"
        aria-label="Portfolio actions and navigation"
      >
        <a
          href="../../assets/Hernâni-Carvalho-da-Silva-Web-Developer.pdf"
          download="Hernâni-Carvalho-da-Silva-Web-Developer.pdf"
          className="downloadCv"
        >
          Download CV
        </a>

        <p className="landing-support-text">
          Explore my certifications, projects, and learn more about my journey.
        </p>

        <nav className="navButtons" aria-label="Main portfolio navigation">
          <Link to="/about">About</Link>
          <Link to="/all-projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
        </nav>
      </section>

      <div className="landing-grid-accent" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};
export default LandingPage;
