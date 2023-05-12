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
                    <div style={{ display: 'flex', width: '100%' }}>
                      <div>
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
                          }}
                        >
                          Hacker Dojo is a creative hacker space where you can
                          meet and collaborate with interesting people from all
                          across the globe working on the future of technology.
                        </p>

                        <Link
                          href="https://hackerdojo.spaces.nexudus.com/?public&"
                          className="btn btn-primary"
                          data-aos-duration="1200"
                          data-aos-delay="400"
                        >
                          BECOME A MEMBER
                        </Link>

                        <button
                          onClick={handleTourClick}
                          className="btn btn-secondary"
                          data-aos-duration="1200"
                          data-aos-delay="500"
                        >
                          TOUR THE DOJO
                        </button>
                        <br></br>
                        <br></br>
                        <button
                          style={{
                            backgroundColor: "rgba(128, 128, 128, 0.8)", // semi-transparent grey
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "10px 15px",
                            marginBottom: "20px",
                            cursor: "text",
                          }}
                          data-aos="fade-in"
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          EXPERIENCE THE CULTURE OF INNOVATION
                        </button>
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
