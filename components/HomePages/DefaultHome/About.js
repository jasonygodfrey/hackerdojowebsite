import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=YprmMvHaWUM&t"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img
                  src="/images/about-img1.jpg"
                  alt="image"
                  className="rounded-10"
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                  One of the unique features of Hacker Dojo is its open-door policy, which allows anyone to visit and use the space, regardless of their technical expertise or background. 

                  </p>
                </div>

                <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                  Hacker Dojo is a community center in Silicon Valley that is focused on providing a collaborative and innovative space for tech enthusiasts, hackers, and entrepreneurs. It was founded in 2009 by several members of the Silicon Valley tech community and is located in Santa Clara, California.

                  </p>
                </div>

                <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                  Hacker Dojo has had a significant impact on the Silicon Valley tech scene, serving as a hub for innovation and entrepreneurship and providing a supportive environment for tech enthusiasts to connect and collaborate.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                  Creating an inclusive and accessible community for tech enthusiasts to learn, play and build together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
