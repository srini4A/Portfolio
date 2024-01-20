import React from "react";
import "./Landing.css";
import background from "../../Img/background.webp";
import img from "../../Img/pic.JPG";
import { Link } from "react-router-dom";
import resume from "../../Img/Resume.pdf";
function Landing() {
  return (
    <div>
      <div style={{ backgroundColor: "black" }}>
        <div className="landing-container">
          <div className="image-container">
            <img src={background} alt="" className="back-img" />
          </div>
          <div className="logo-img">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQexRwHMG5LytyzRAXMFYQHQ_pcNu6JvLM58oMaAjJV6J_uDy4F"
              alt=""
              className="logo-img-1"
            />
          </div>
          <div className="list-cont">
            <ul className="horizontal-list">
              <li>
                <a href="" className="underline-animation">
                  Home
                </a>
              </li>
              <li>
                <Link className="underline-animation" to={"/about"}>
                  About
                </Link>
              </li>

              <li>
                <Link className="underline-animation" to={"/projects"}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className="underline-animation" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li>
                <button className="download-btn">
                  {" "}
                  <a href={resume} download>
                    Download Resume
                  </a>
                </button>
              </li>
            </ul>
          </div>
          <div className="text-container">
            <p className="name">
              Hi, I'm <span style={{ color: "#ff004f" }}>Srinivas Ch</span>{" "}
            </p>
            <p className="profession">
              Software Developer | Mechanical Engineer
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p className="footer-css">© ch srinivas.</p>
      </footer>
    </div>
  );
}

export default Landing;
