import React from "react";
import AboutImage from "../../assets/S__3448852.jpg";
import "./About.css";
import { Tilt } from "react-tilt";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
          <img src={AboutImage} alt="" className="about-img" />
          </Tilt>

          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <span className="about-subtitle">My introduction</span>
            <hr />

            <p className="about-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, quisquam dignissimos earum nisi esse saepe qui numquam
              veritatis facilis maiores. Neque enim cupiditate corporis
              voluptatem obcaecati beatae illo delectus id?
            </p>
          </div>
      </div>
    </section>
  );
}

export default About;
