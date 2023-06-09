import React from "react";
import Link from "next/link";

const CtaArea = () => {
  return (
    <>
      <div className="cta-area bg-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <div 
                className="cta-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Have an event in mind?</h3>
                <p>Contact Our Events Coordinator!</p>
              </div>
            </div>

            <div
              className="col-lg-5 col-md-4"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="cta-btn-box">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
