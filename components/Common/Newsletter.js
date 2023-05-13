import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-area"
              style={{ 
                backgroundColor: '#000',
              }}>
        <div className="container"
        >

          
          <div 
            className="newsletter-inner-area" 
            style={{ 
              backgroundImage: `url(/images/newsletter-bg.jpg)` ,
              backgroundColor: '#000',
            }}
          >
            <div className="newsletter-content">
              <span 
                className="sub-title"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
               
              </span>

              <h2
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Stay up-to-date on our current events and news!
              </h2>

              <form 
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
                <button type="submit">Subscribe!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
