import React from "react";
import "./Skill.css";

function Skills() {
  return (
    <table className="skill-main">
      <tbody>
        <tr>
          <td>
            <span className="heading">Programming skills</span>
          </td>
          <td>
            <span className="heading">Scripting Languages</span>
          </td>
          <td>
            <span className="heading">Designing skills</span>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>C</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.JS</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>AutoCAD</li>
              <li>Solid works</li>
              <li>Fusion-360</li>
              <li>Alteryx (Data Analysis)</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Skills;
