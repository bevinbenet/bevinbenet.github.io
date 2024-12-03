import { Icon } from '@iconify/react';
import React, { useState, useRef } from 'react';
import parser from 'html-react-parser';
import Slider from "react-slick"; // Ensure you have installed and imported react-slick

export default function About({ data }) {
 
  const sliderRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('Skills');

  const { miniTitle, title, description, funfacts, btnText, btnUrl,achievements,sectionHeading, allProjects } = data;
  console.log("About Component Data:", achievements);
  // Slider settings
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides visible
    slidesToScroll: 1, // Slides to scroll per click
    responsive: [
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const filteredItems = selectedCategory === 'All'
    ? achievements.items
    : achievements.items.filter(item => item.category === selectedCategory);  
  
    return (
    <section className="about-section section gray-bg" id="about">
      <div className="container">
        <div className="effect-1">
          <img
            src="/images/effect-1.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          />
        </div>
        <div className="effect-2">
          <img
            src="/images/effect-2.svg"
            alt="Shape"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="400"
          />
        </div>
        
        <div className="row align-items-center justify-content-center gy-5">
          <div className="col-lg-6 col-xl-5" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
            <div className="about-banner">
              <div className="filter-buttons" >
                {/*<button onClick={() => setSelectedCategory('All')}>All</button>*/}
                {achievements.categories.map((category, index) => (
                  <button className="tab" key={index} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>
                ))}
              </div>
            <Slider ref={sliderRef} {...settings} className="slider-gap-24" style={{ width: '100%' }}>
              {filteredItems.map((item, index) => (
                <div key={index} style={{ width: "416px" }} className='parent-div'>
                  <div className="skill-box">
                    <div className="skill-media">
                      <img src={item.thumbUrl} alt="Thumb" /> {/* Replace with actual image if available */}
                    </div>
                    <div className="skill-body">
                      <div className="text">
                    <span className='skillCategory'>{item.category}</span>
                        <h5 className="card-head">{item.title}</h5>
                        <div className="divider"></div>
                        <div className="card-desc" dangerouslySetInnerHTML={{ __html: item.details}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="navigation-buttons">
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
          
          <div className="col-lg-6 col-xl-5 px-lg-5">
            <div
              className="about-text"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="section-heading">
                {miniTitle && (
                  <h6>
                    <span>{miniTitle}</span>
                  </h6>
                )}

                {title && <h2 style={{ fontSize: "37px" }}>{parser(title)}</h2>}
              </div>
              <p>{description}</p>
              <div className="review-box">
                {funfacts?.map((item, index) => (
                  <div className="r-box" key={index}>
                    <h3>
                      {item.number}
                      <span>+</span>
                    </h3>
                    <label>{item.title}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

