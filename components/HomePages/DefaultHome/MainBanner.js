import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';



const gradientMovingOutline = {
  fontSize: '3rem',
  WebkitTextFillColor: 'transparent',
  WebkitTextStrokeWidth: '0px',
  backgroundImage: 'linear-gradient(-45deg, #FFA500, #f79, #f06)',
  backgroundSize: '200% 200%',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  animation: 'gradient-moving 3s infinite',
  '@keyframes gradient-moving': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
};
const videoStyle = {
  position: 'absolute',
  top: '-85%',
  left: '-10%',
  minWidth: '100%',
  minHeight: '100%',
  width: '120%',
  height: '450%',
  zIndex: -100,
  objectFit: 'cover',
  pointerEvents: 'none',
};
const paragraphStyle = {
  color: 'white', // Add this line
};

const mainBannerContentStyle = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%', // Adjust the height as needed
};

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
              <div className="col-lg-12">
                  <div className="main-banner-content" style={{ position: 'relative' }}>
                    <video
                      style={videoStyle}
                      playsInline
                      autoPlay
                      muted
                      loop
                    >
                      <source src="https://jasonbucket123.s3.us-west-2.amazonaws.com/hackerdojocollage.webm" type="video/webm" />
                    </video>
         
                    <span
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                    
                    </span>

                    <h1
  style={gradientMovingOutline}
  data-aos="fade-in"
  data-aos-duration="1200"
  data-aos-delay="200"
>
  Where Community + Creativity Meet
</h1>

                    
                    <p
                    style={paragraphStyle}
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
                
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;