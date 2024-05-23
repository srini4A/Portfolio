import React from "react";
import "./Landing.css";
import background from "../../Img/background.webp";
import img from "../../Img/pic.JPG";
import { Link } from "react-router-dom";
import resume from "../../Img/Resume.pdf";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
function Landing() {
  return (
    <>
      <div className="landing-container">
        <Header />
        <div className="text-container">
          <p className="name">
            Hi, I'm <span className="name-span">Srinivas Ch</span>
          </p>
          <p className="profession">Software Developer | Mechanical Engineer</p>
        </div>
      </div>
      <div style={{ backgroundColor: "grey" }}>
        <Footer />
      </div>
    </>
  );
}

export default Landing;
