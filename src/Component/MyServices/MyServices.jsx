import React, { useState } from "react";
import "./MyServices.css";
import {
  FaArrowRight,
  FaXmark,
  FaRegCircleCheck,
  FaCode,
  FaPalette,
  FaFirstdraft,
} from "react-icons/fa6";
import { Fade } from "react-reveal";

function MyServices() {
  const [showModal, setShowModal] = useState(0);

  const toggleTab = (index) => {
    setShowModal(index);
  };

  return (
    <section className="services-section" id="services">
      <Fade>
        <h2 className="service-title">Services</h2>
        <span className="service-subtitle">What i offer</span>
      </Fade>

      <div className="services-container">
        <div className="services-content">
          <Fade left>
            <div>
              <FaCode className="icon" />
              <h3 className="services-title">
                Product <br /> Design
              </h3>
            </div>

            <span className="services-button" onClick={() => toggleTab(1)}>
              Viwe More <FaArrowRight className="arrow-right" />
            </span>
          </Fade>

          <div
            className={
              showModal === 1 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FaXmark className="xmark" onClick={() => setShowModal(0)} />
              <h3 className="services-modal-title">Product Design</h3>
              <p className="services-modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                perferendis obcaecati.
              </p>

              <ul className="services-modal-services">
                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I create ux interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    Design and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <Fade top>
            <div>
              <FaPalette className="icon" />
              <h3 className="services-title">
                Ux/Ui <br /> Design
              </h3>
            </div>

            <span className="services-button" onClick={() => toggleTab(2)}>
              Viwe More <FaArrowRight className="arrow-right" />
            </span>
          </Fade>

          <div
            className={
              showModal === 2 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FaXmark className="xmark" onClick={() => setShowModal(0)} />
              <h3 className="services-modal-title">Ux/Ui Design</h3>
              <p className="services-modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                perferendis obcaecati.
              </p>

              <ul className="services-modal-services">
                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I create ux interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    Design and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <Fade right>

          <div>
            <FaFirstdraft className="icon" />
            <h3 className="services-title">
              Visual <br /> Design
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>
            Viwe More <FaArrowRight className="arrow-right" />
          </span>
          </Fade>

          <div
            className={
              showModal === 3 ? "services-modal active-modal" : "services-modal"
            }
          >
            <div className="services-modal-content">
              <FaXmark className="xmark" onClick={() => setShowModal(0)} />
              <h3 className="services-modal-title">Visual Design</h3>
              <p className="services-modal-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                perferendis obcaecati.
              </p>

              <ul className="services-modal-services">
                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I create ux interactions.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services-modal-service">
                  <FaRegCircleCheck className="check" />
                  <p className="services-modal-info">
                    Design and mockups of product for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyServices;
