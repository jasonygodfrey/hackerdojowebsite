import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=mcg2By317ZI&autoplay=1"]}
      />

      <div 
        className="main-banner" 
        style={{ 
          backgroundImage: `url()` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      Where Community + Creativity Meet
                    </span>

                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      Hacker Dojo
                    </h1>
                    
                    <p
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      Our Mission: Empowering an inclusive and accessible community where tech enthusiasts unite for learning, collaboration, and creativity.
                    </p>
                    
                    <Link 
                      href="https://hackerdojo.spaces.nexudus.com/?public&" 
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="400"
                    >
                      Become a Member
                    </Link>

                    <button
                      onClick={() => setToggler(!toggler)}
                      className="btn btn-secondary"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="500"
                    >
                      <i className="fa-solid fa-play me-1"></i> Who We Are
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-animation-image">
                    {/* Shape Image */}
                    <img
                      src="/images/banner-shapes/bn-shape1.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape2.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape3.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape4.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape5.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape6.png"
                      className="animate__animated animate__rollIn animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape7.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape8.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape9.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape10.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape11.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape12.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="image"
                    />

                    {/* Main Image */}
                    <img
                      src="/images/banner-img1.png"
                      className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;