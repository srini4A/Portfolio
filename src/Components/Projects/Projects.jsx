import React from "react";
import Header from "../Header/Header";
import { projects } from "../Constants";
import Projects1 from "./Projects1";

function Projects() {
  return (
    <div>
      <div className="main-cont">
        <Header />

        <div className="photo-cont-1">
          <div style={{ marginTop: "120px" }}>
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
          </div>
          <div className="cont-2">
            {projects.map((e, index) => (
              <Projects1 key={index} {...e} />
            ))}
            {/* <Projects1 /> */}
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-css">© Ch Srinivas.</p>
      </footer>
    </div>
  );
}

export default Projects;
