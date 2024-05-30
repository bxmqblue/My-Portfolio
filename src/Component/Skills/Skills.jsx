import React from "react";
import Frontend from "./Frontend";
import "./Skill.css";
import { Fade, Zoom } from "react-reveal";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <Fade>
          <h2 className="skills-title">Skills</h2>
          <span className="skills-subtitle">My technical level</span>
        </Fade>

        <Zoom>
          <div className="skills-box">
            <Frontend />
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default Skills;
