import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const backgroundImage = '/images/hackerdojobackground.png';
const videoBackground = "https://jasonbucket123.s3.us-west-2.amazonaws.com/hacker_dojo_1.mp4";


const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  const handleTourClick = () => {
    window.location.href =
      "https://calendly.com/hdfrontdesk/30min?month=2023-05";
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=mcg2By317ZI&autoplay=1"]}
      />
   <div
        className="main-banner"
        style={{
          position: "relative",
          marginTop: "-50px",  // change this value as needed
        }}
      >
        <video 
          autoPlay 
          loop 
          muted 
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-banner-content">
                    <div style={{ 
                      display: 'flex', 
                      width: '100%' }}>
                    <div style={{ textAlign: 'center' }}>
                        <span
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        ></span>


                        <h1
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay="200"
                          style={{ textShadow: '2px 2px 4px #000' }}
                        >
                          THE BEST PLACE TO CONNECT WITH SILICON VALLEY
                        </h1>
                   

                        <p
  data-aos="fade-in"
  data-aos-duration="1200"
  data-aos-delay="300"
  style={{
    color: "white",
    textShadow: "1px 1px 1px #000",
    maxWidth: "600px", // You can adjust this value as needed
    lineHeight: "1.6", // You can adjust this value as needed
    textAlign: 'center',
    margin: 'auto',
  }}
>
  Hacker Dojo is a creative hacker space where you can meet and collaborate with interesting people from all across the globe working on the future of technology.
</p>
<br></br>

                        <Link
                          href="https://hackerdojo.spaces.nexudus.com/?public&"
                          className="btn btn-primary btn-glow"
                          data-aos-duration="1200"
                          data-aos-delay="400"
                        >
                          BECOME A MEMBER
                        </Link>

                        <button
                          onClick={handleTourClick}
                          className="btn btn-secondary btn-glow-red"
                          data-aos-duration="1200"
                          data-aos-delay="500"
                        >
                          TOUR THE DOJO
                        </button>
                        <br></br>
                        <br></br>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
