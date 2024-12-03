import { Icon } from '@iconify/react';
import React, { useState, useRef } from 'react';
import SectionHeading from './SectionHeading';
import Slider from 'react-slick';
import Modal from './Modal';

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [modalData, setModalData] = useState({});
  const sliderRef = useRef(null); // Reference for Slider instance

  const { sectionHeading, allProjects } = data;

  const handelProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
    setModal(!modal);
    console.log(modalType);
  };

  var settings = {
    dots: true,
    arrows: false, // Disable built-in arrows
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 991, // Tablets
        settings: {
          dots: true,
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767, // Phones
        settings: {
          dots: true,
          slidesToShow: 1, // Show 1 slide on phones
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="project-section section" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          <div
            className="full-width"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider ref={sliderRef} {...settings} className="slider-gap-24" style={{ width: '100%' }}>
              {allProjects?.map((item, index) => (
                <div key={index} style={{ padding: '0 10px', boxSizing: 'border-box' }}>
                  <div className="project-box" style={{ width: '100%' }}>
                    <div className="project-media">
                      <img
                        src={item.thumbUrl}
                        alt="Thumb"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                      <span
                        className="gallery-link"
                        onClick={() => handelProjectDetails(item, 'image')}
                      >
                        <i>
                          <Icon icon="bi:plus" />
                        </i>
                      </span>
                    </div>
                    <div className="project-body">
                      <div className="text">
                        <h5>{item.title}</h5>
                        <span>{item.subTitle}</span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link"
                          onClick={() => handelProjectDetails(item, 'details')}
                        >
                          <Icon icon="bi:plus" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Navigation Buttons Below Slider */}
            <div className='navigation-buttons'>
              <button
                onClick={() => sliderRef.current.slickPrev()} // Previous slide
                className='sliderBtn'
              >
               <Icon icon="bi:arrow-left" />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()} // Next slide
                className='sliderBtn'
              >
               <Icon icon="bi:arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(!modal)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(!modal)}
              >
                <Icon style={{rotate:"135deg"}} icon="bi:plus" />
              </button>
              {modalType === 'image' ? (
                <img src={modalData.thumbUrl} alt="Thumbnail" />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
