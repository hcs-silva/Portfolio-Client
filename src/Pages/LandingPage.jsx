import thumbnail from "/thumbnail.png";
import { Link, NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="thumbnail">
        <div className="header-text">
          <h1>Hernâni Silva</h1>
          <h3>Junior Full Stack Web Developer | MERN Stack</h3>
          <p>
            <strong>
              Building robust, user-focused web applications with the MERN
              stack.
            </strong>
          </p>
          <p className="hero-section">
            Inspired by the wild beauty of nature, the quiet joy of fishing and
            hiking, and the love I share with my wife and our two kittens, I
            bring curiosity, gratitude, and dedication to every project. My goal
            is to craft meaningful digital experiences that blend creativity
            with technical excellence.
          </p>
        </div>
        <img src={thumbnail} alt="Hernâni Silva, Full Stack Web Developer" />
      </div>
      <div className="landing-main">
        <div className="layer1">
          <div className="layer2">
            <div className="layer3">
              <div className="layer4">
                <a
                  href="../../assets/Hernâni-Carvalho-da-Silva-Web-Dev.pdf"
                  download="Hernâni-Carvalho-da-Silva-Web-Dev.pdf"
                  className="downloadCv"
                >
                  Download My CV!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-bottom">
        <p>
          Explore my certifications, projects, and learn more about my journey
          below!
        </p>
        <div className="navButtons">
          <Link to="/about">About</Link>
          <Link to="/all-projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
