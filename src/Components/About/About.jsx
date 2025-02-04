import React, { useState } from "react";
import img from "../../Img/pic.JPG";
import "./About.css";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import WorkExperience from "../WorkExperience/WorkExperience";

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
            I’m a highly driven full-stack developer specializing in the MERN
            stack, passionate about building scalable, user-centric
            applications. With expertise in frontend and backend technologies, I
            create innovative solutions that enhance efficiency and user
            experience. Seeking a challenging frontend role to apply my
            creativity and technical expertise to impactful projects.
          </p>
          <div>
            {/* <button
              className={`btn-about-1 ${
                currentPage === "WorkExperiences" ? "active" : ""
              }`}
              onClick={() => setCurrentPage("WorkExperiences")}
            >
              Work Experience
            </button> */}
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
            {/* {currentPage == "WorkExperiences" && <WorkExperience />} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
