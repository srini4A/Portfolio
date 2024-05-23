import React, { useState } from "react";
import img from "../../Img/pic.JPG";
import "./About.css";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
function About() {
  const [currentPage, setCurrentPage] = useState("Skills");
  return (
    <div className="main-cont">
      <Header />
      <div className="cont-about">
        <img src={img} alt="" className="img-pic" />
        <div className="cont-about-para">
          <h1>About Me</h1>
          <p style={{ textAlign: "justify" }}>
            I'm a dedicated BTech Mechanical Engineering graduate with a strong
            passion for software. Actively acquiring software skills, I'm
            committed to personal and professional growth. I strive for
            excellence through hard work, aiming to advance my knowledge and
            provide innovative software solutions for career advancement.
          </p>
          <div>
            <button
              className={`btn-about ${
                currentPage === "Skills" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("Skills")}
            >
              Skills
            </button>
            <button
              className={`btn-about-1 ${
                currentPage === "Education" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("Education")}
            >
              Education
            </button>
          </div>
          <div>
            {currentPage == "Skills" && <Skills />}
            {currentPage == "Education" && <Education />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
