import React from "react";
import Link from "next/link";

const CtaAreaTwo = () => {
  return (
    <>
      <div className="cta-area-two ptb-100">
        <div className="container">
          <div className="cta-content">
            <span
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              
            </span>
            <h3
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Are You Ready? Let's Hack the Planet!
            </h3>
          </div>

          <div
            className="cta-btn-box"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Link href="/contact" className="custom-btn">
              EVENTS
            </Link>

            <Link href="/contact" className="custom-btn">
              CONTACT US
            </Link>
            <Link href="/contact" className="custom-btn">
              TOUR THE DOJO
            </Link>
          </div>
        


        </div>
      </div>
    </>
  );
};

export default CtaAreaTwo;
