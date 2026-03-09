import { useState } from "react";
import { HR } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsEnvelopeFill, BsLinkedin, BsShare } from "react-icons/bs";

const AboutPage = () => {
  const [showFallback, setShowFallback] = useState(false);
  const shareUrl = "https://hernani-silva-dev.netlify.app";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out my portfolio!",
          text: "Hey, check out my work here!",
          url: shareUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
      return;
    }

    setShowFallback(true);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("Link copied!");
      setShowFallback(false);
    } catch (error) {
      console.error("Error copying link:", error);
      alert("Copy failed. Please copy the URL manually.");
    }
  };

  return (
    <section className="about">
      <h1>About Me</h1>
      <HR id="topHR" />

      <div className="description">
        <article className="about-me">
          <p>
            Hello! I'm a passionate and motivated Full Stack Web Developer who
            completed the Web Development Bootcamp (MERN stack) through
            IronHack, ready to bring creative and efficient solutions to your
            projects. Currently, I'm enhancing my skills through Codecademy's
            Full-Stack Engineer course, combining a strong technical foundation
            with an unwavering drive for learning and growth.
          </p>
          <HR />
          <p>
            My experience in the military has provided me with exceptional
            teamwork, communication, and time management skills. These
            experiences have shaped my proactive mindset and commitment to
            achieving goals effectively, even under pressure.
          </p>
          <HR />
          <p>
            I have 3 projects completed in the Bootcamp that I will be listing
            in the Projects section. I will also provide the link to my GitHub
            repositories.
          </p>
          <HR />
          <p>
            I'm not just about code - I love exploring new technologies,
            tackling challenges, and sharing insights with clients and
            colleagues. Let's collaborate to turn your ideas into reality!
          </p>
        </article>

        <aside className="column">
          <section className="skills">
            <p>
              I excel in problem-solving and analytical thinking while
              maintaining a clear line of thought and communication.
            </p>
            <HR />
            <div className="list">
              <div className="soft-skills">
                <h2>Some of my Soft Skills are:</h2>
                <ul>
                  <li>Communication</li>
                  <li>Problem Solving</li>
                  <li>Critical Thinking</li>
                  <li>Teamwork</li>
                  <li>Adaptability</li>
                  <li>Collaboration</li>
                </ul>
              </div>

              <div className="hard-skills">
                <h2>My Hard Skills include:</h2>
                <ul>
                  <li>React.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                  <li>Node.js</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Version Control (Git)</li>
                  <li>HTML/CSS</li>
                  <li>API Integration</li>
                  <li>Authentication (JWT and Bcrypt)</li>
                  <li>Testing Basics</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="contacts">
            <a
              href="mailto:hcsilvamatos5@gmail.com"
              className="link-icon"
              aria-label="Email Hernani"
            >
              <BsEnvelopeFill className="contactIcons" />
            </a>

            <a
              href="https://www.linkedin.com/in/hernani-silva-webdev"
              target="_blank"
              rel="noreferrer"
              className="link-icon"
              aria-label="Open LinkedIn profile"
            >
              <BsLinkedin className="contactIcons" />
            </a>

            <button
              type="button"
              className="share-button"
              onClick={handleShare}
              aria-label="Share portfolio link"
            >
              <BsShare className="contactIcons" />
            </button>
          </div>
        </aside>
      </div>

      <Link to="/" className="about-home-link">
        Home
      </Link>

      {showFallback && (
        <div
          className="share-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Share portfolio"
        >
          <div className="share-modal__panel">
            <p>Copy the link and share it:</p>
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="share-modal__input"
              onClick={(e) => e.target.select()}
            />

            <div className="share-modal__actions">
              <button
                type="button"
                className="share-modal__button share-modal__button--primary"
                onClick={handleCopyLink}
              >
                Copy Link
              </button>

              <button
                type="button"
                className="share-modal__button share-modal__button--secondary"
                onClick={() => setShowFallback(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
