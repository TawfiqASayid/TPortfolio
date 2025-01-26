import { useEffect, useState } from "react";
import "./About.css";

const CircularProgress = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500); // Delay before the progress fills
    return () => clearTimeout(timer);
  }, [value]);

  const radius = 35; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (progress / 100) * circumference; // Stroke offset for progress

  // Determine progress bar color based on the value
  const getColor = (progress) => {
    if (progress >= 80) return "#4caf50"; // Green
    if (progress >= 60) return "#ffc107"; // Yellow
    if (progress >= 40) return "#ff9800"; // Orange
    return "#f44336"; // Red
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
            stroke: getColor(progress), // Set dynamic color
          }}
        />
      </svg>
      <span>{progress}%</span>
    </div>
  );
};

const About = () => {
  const [theme, setTheme] = useState("light");
  const skills = [
    { name: "HTML", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "TAILWINDCSS", value: 75 },
    { name: "React", value: 95 },
    { name: "Flutter", value: 80 },
    { name: "Kotlin", value: 60 },
    { name: "ML Algorithms (NN, R)", value: 70 },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div id="about" className="about">
      <button className="theme-toggle" onClick={toggleTheme}>
        Tog
      </button>

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
