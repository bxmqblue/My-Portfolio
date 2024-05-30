import React from "react";
import Frontend from "./Frontend";
import "./Skill.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
          <h2 className="skills-title">Skills</h2>
          <span className="skills-subtitle">My technical level</span>

          <div className="skills-box">
            <Frontend />
          </div>
      </div>
    </section>
  );
}

export default Skills;
