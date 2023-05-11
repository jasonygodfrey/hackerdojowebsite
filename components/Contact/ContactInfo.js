import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-mail"></i>
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:admin@pungent.com">admin@hackerdojo.com</a>
                </p>
                <p>
                  <a href="mailto:info@pungent.com">info@hackerdojo.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Visit Here</h3>
                <p>
                855 Maude Avenue Mountain View,  <br /> California, 94043, United States
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+1234567890">+123 456 7890</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
