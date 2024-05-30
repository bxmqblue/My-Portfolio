import React from "react";
import { FaSquareInstagram, FaFacebook, FaArrowRight } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
        <h2 className="contact-title">Get in touch</h2>
        <span className="contact-subtitle">Contact me</span>
      <div className="contact-container">
        <div className="contact-con">
            <h1>Talk to me</h1>
          <div className="contact-social">
            <div className="contact-content">
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
            </div>
          </div>
        </div>
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
      </div>
    </section>
  );
}

export default Contact;
