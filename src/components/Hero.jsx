import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import SocialBtns from './SocialBtns';
import Modal1 from './Cvmodal'; // Ensure this component is correctly implemented and imported

export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } = data;
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="home-section" id="home" data-scroll-index={0}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hs-text-box">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {heading}
                </h1>
                <p
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {description}
                </p>
                <div
                  className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <button onClick={handleOpenModal} className="px-btn">
                    {btnText}
                    <i className="d-flex">
                      <Icon icon="bi:arrow-right" />
                    </i>
                  </button>
                  <SocialBtns
                    socialBtns={socialData}
                    variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hs-banner">
                <img
                  src={imgUrl}
                  alt="Admin"
                  className="imageHome"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={handleCloseModal}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={handleCloseModal}
              >
                <Icon style={{ rotate: "135deg" }} icon="bi:plus" />
              </button>
              <Modal1 show={showModal} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}