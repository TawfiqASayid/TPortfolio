import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1>
          <span>I am Tofik Ahmed,</span> Mobile App Developer and Software Engineer
        </h1>
        <p>
          I specialize in building high-performance and enhanced mobile applications using Flutter and React Native.
        </p>
        <div className="hero-action">
          <a
            href="#connect"
            className="hero-connect"
            title="Connect with Tofik Ahmed"
          >
            Connect with me
          </a>
          <a
            href="../../assets/Tofik_Ahmed_Resume.pdf"
            className="hero-resume"
            title="Open or Download my Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
        <div className="hero-socials">
          <a
            href="https://github.com/TawfiqGmen"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="hero-icon" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter className="hero-icon" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="hero-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
