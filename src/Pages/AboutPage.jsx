import { useState } from "react";
import { HR } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsEnvelopeFill, BsLinkedin, BsShare } from "react-icons/bs";

const AboutPage = () => {
  const [showFallback, setShowFallback] = useState(false);
  const shareUrl = "https://hernani-silva-dev.netlify.app"; // Replace with your specific URL

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
    } else {
      setShowFallback(true); // Show fallback for unsupported browsers
    }
  };

  return (
    <div className="about">
      <h1>About Me</h1>
      <HR id="topHR" />
      <div className="description">
        <div className="about-me">
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
        </div>
        <div className="column">
          <div className="skills">
            <p>
              I excel in problem-solving and analytical thinking while
              maintaining a clear line of thought and communication.
            </p>
            <HR />
            <div className="list">
              <ul className="soft-skills">
                <p>Some of my Soft Skills are:</p>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Collaboration</li>
              </ul>
              <ul className="hard-skills">
                <p>My Hard Skills include:</p>
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
          <div className="contacts">
            <a href="mailto:hcsilvamatos5@gmail.com">
              <BsEnvelopeFill size="1em" className="contactIcons" />
            </a>
            <a href="https://www.linkedin.com/in/hernani-silva-webdev">
              <BsLinkedin size="1em" className="contactIcons" />
            </a>
            <BsShare 
              size="2em" 
              className="contactIcons cursor-pointer" 
              onClick={handleShare} 
            />
          </div>
        </div>
      </div>
      <Link to="/home">Home</Link>

      {/* Fallback Share Modal */}
      {showFallback && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <p className="mb-2">Copy the link and share it:</p>
            <input
              type="text"
              value={shareUrl} // Shows the specific URL
              readOnly
              className="border p-2 w-full"
              onClick={(e) => e.target.select()}
            />
            <button
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                alert("Link copied!");
                setShowFallback(false);
              }}
            >
              Copy Link
            </button>
            <button
              className="ml-2 mt-3 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setShowFallback(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
