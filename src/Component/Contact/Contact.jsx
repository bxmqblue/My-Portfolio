import React from "react";
import { FaSquareInstagram, FaFacebook, FaArrowRight } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import "./Contact.css";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Fade top>
        <h2 className="contact-title">Get in touch</h2>
        <span className="contact-subtitle">Contact me</span>
      </Fade>
      <div className="contact-container">
        <div className="contact-con">
          <Fade left>
            <h1>Talk to me</h1>
          </Fade>
          <div className="contact-social">
            <div className="contact-content">
              <Fade bottom distance="50%">
                <div className="contact-card">
                  <FaSquareInstagram className="icon" />

                  <h3 className="contact-card-title">Instagram</h3>
                  <span className="contact-card-data">@bxmqblue</span>

                  <a href="#" className="contact-button">
                    Write me
                    <FaArrowRight className="arrow" />
                  </a>
                </div>

                <div className="contact-card">
                  <BiLogoGmail className="icon" />

                  <h3 className="contact-card-title">Gmail</h3>
                  <span className="contact-card-data">
                    bombloveza40@gmail.com
                  </span>

                  <a href="#" className="contact-button">
                    Write me
                    <FaArrowRight className="arrow" />
                  </a>
                </div>

                <div className="contact-card">
                  <FaFacebook className="icon" />

                  <h3 className="contact-card-title">Facebook</h3>
                  <span className="contact-card-data">Peerapol Khempetch</span>

                  <a href="#" className="contact-button">
                    Write me
                    <FaArrowRight className="arrow" />
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Fade right>
          <div className="contact-form">
            <h3 className="contact-oder">Write me your project</h3>
            <form action="" className="contact-input">
              <div className="conatct-fname-lname">
                <div>
                  <label className="label" htmlFor="">
                    First Name
                  </label>
                  <input type="text" placeholder="Your First Name" />
                </div>

                <div>
                  <label className="label" htmlFor="">
                    Last Name
                  </label>
                  <input type="text" placeholder="Your Last Name" />
                </div>
              </div>
              <label className="label" htmlFor="">
                Email
              </label>
              <input type="email" placeholder="Your Email" />

              <label className="label" htmlFor="">
                Type your message
              </label>
              <textarea
                cols={30}
                rows={10}
                placeholder="Wirte your message"
              ></textarea>
            </form>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Contact;
