import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./About.css";

const CircularProgress = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const getColor = (progress) => {
    if (progress >= 80) return "#4caf50";
    if (progress >= 60) return "#ffc107";
    if (progress >= 40) return "#ff9800";
    return "#f44336";
  };

  return (
    <div className="circular-progress">
      <svg>
        <circle className="circle-bg" cx="50" cy="50" r={radius} />
        <circle
          className="circle-progress"
          cx="50"
          cy="50"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            stroke: getColor(progress),
          }}
        />
      </svg>
      <span>{progress}%</span>
    </div>
  );
};

CircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
};

const About = () => {
  const skills = [
    { name: "python", value: 75 },
    { name: "dart", value: 90 },
    { name: "Asp.net", value: 70 },
    { name: "React", value: 60 },
    { name: "Flutter", value: 90 },
    { name: "AWS", value: 60 },
    { name: "Figma", value: 80 },
    { name: "ML Algorithms (NN, R)", value: 70 },
  ];

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About</h1>
        <div className="underline"></div>
      </div>

      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I’m Tofik Ahmed, a software engineer with 2 years of
              experience specializing in mobile application development. I’m
              passionate about creating seamless, high-performance mobile
              experiences using cutting-edge technologies like Flutter and
              React Native.
            </p>
            <p>
              Beyond coding, I have a deep curiosity for exploring decentralized
              cloud technologies like Phala Network, diving into management
              theories and practices, and keeping up with advancements in
              cryptography and cryptocurrency. When I’m not working or
              learning, I enjoy practicing ITF Taekwondo and savoring my
              favorite drink—coffee!
            </p>
            <p>
              Feel free to browse my portfolio to discover the projects I’ve
              worked on and the skills I bring to the table. Let’s collaborate
              and build something incredible together!
            </p>
          </div>
          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={index}>
                <p>{skill.name}</p>
                <CircularProgress value={skill.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
