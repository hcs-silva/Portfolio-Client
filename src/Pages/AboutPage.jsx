import {HR} from "flowbite-react"
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <HR id="topHR"></HR>
      <div className="description">
        <div className="about-me">
        <p>
          Hello! I'm a passionate and motivated Full Stack Web Developer who
          completed the Web Development Bootcamp (MERN stack) through IronHack,
          ready to bring creative and efficient solutions to your projects.
          Currently, I'm enhancing my skills through Codecademy's Full-Stack
          Engineer course, combining a strong technical foundation with an
          unwavering drive for learning and growth.
        </p>
        <HR></HR>
        <p>
          {" "}
          My experience in the military has provided me with exceptional
          teamwork, communication, and time management skills. These experiences
          have shaped my proactive mindset and commitment to achieving goals
          effectively, even under pressure.
        </p>
        <HR></HR>
        <p>
          
          I have 3 projects completed in the Bootcamp that I will be listing in
          the Projects section. I will also provide the link to my GitHub
          repositories.
        </p>
        <HR></HR>
        <p>          
          I'm not just about code - I love exploring new technologies, tackling
          challenges, and sharing insights with clients and colleagues. Let's
          collaborate to turn your ideas into reality!
        </p>
        </div>
        <div className="skills">
            <p>I excel in problem-solving and analytical thinking while maintaining a clear line of thought and communication</p>
            <HR></HR>
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
      </div>
      <Link to="/home">Home Page</Link>     
    </div>
  );
};
export default AboutPage;
