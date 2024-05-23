import React from "react";
import Header from "../Header/Header";
import { projects } from "../Constants";
import Projects1 from "./Projects1";
import Footer from "../Footer/Footer";

function Projects() {
  return (
    <div className="main-cont">
      <Header />
      <div className="photo-cont-1">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            textDecoration: "underline",
            textDecorationColor: "#ff004f",
            padding: "10px",
          }}
        >
          My Projects
        </h1>
        <div className="cont-2">
          {projects.map((e, index) => (
            <Projects1 key={index} {...e} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
