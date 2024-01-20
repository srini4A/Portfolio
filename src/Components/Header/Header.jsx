import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import resume from "../../Img/Resume.pdf";
function Header() {
  return (
    <div className="header-cont-main">
      <div className="logo-img">
        <Link to={"/"}>
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQexRwHMG5LytyzRAXMFYQHQ_pcNu6JvLM58oMaAjJV6J_uDy4F"
            alt=""
            className="logo-img-1"
          />
        </Link>
      </div>
      <div className="list-cont">
        <ul className="horizontal-list">
          <li>
            <Link className="underline-animation" to={"/"}>
              Home
            </Link>
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
    </div>
  );
}

export default Header;
