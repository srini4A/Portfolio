import React, { useState } from "react";
import "./Projects.css";

function Projects1(props) {
  const [isHovered, setIsHovered] = useState(false);
  const onCliicked = () => {
    if (props.gitLink) {
      window.open(props.gitLink, "_blank");
    } else alert("No gitlink");
  };
  return (
    <div
      className="project-container"
      onClick={onCliicked}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="image-container-1">
        <img
          src="https://poojaminna.s3.us-east-2.amazonaws.com/images/forport-2.png"
          alt=""
          className="img-proj"
        />
        <div className="image-text">
          {isHovered ? (
            <div>
              <h1 style={{ color: "rgb(243, 173, 195)" }}>{props.name}</h1>
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  fontFamily: "cursive",
                }}
              >
                {props.description}
              </p>
            </div>
          ) : (
            <>
              <h1 style={{ color: "rgb(243, 173, 195)" }}>{props.name}</h1>
              <div>
                {props.skills.map((e, index) => (
                  <p key={index} style={{ fontSize: "20px" }}>
                    {e}
                  </p>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects1;
