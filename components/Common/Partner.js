import React from "react";

const partnersData = [
  {
    image: "/images/partners/partner1.png",
    link: "#",
    aosDelay: "100",
  },
  {
    image: "/images/partners/partner2.png",
    link: "#",
    aosDelay: "200",
  },
  {
    image: "/images/partners/partner3.png",
    link: "#",
    aosDelay: "300",
  },
  {
    image: "/images/partners/partner4.png",
    link: "#",
    aosDelay: "400",
  },
  {
    image: "/images/partners/partner5.png",
    link: "#",
    aosDelay: "500",
  },

];

const Partner = () => {
  return (
    <>
      <div className="partner-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Partners and Sponsors</h2>
            <p>
            Special thanks to our sponsors for their generous support, enabling us to continue providing high-quality educational content to Hacker Dojo.
            </p>
          </div>

          <div className="row align-items-center justify-content-center">
            {partnersData &&
              partnersData.map((value, i) => (
                <div className="col-lg-2 col-6 col-sm-4" key={i}>
                  <div
                    className="single-partner"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <a href={value.link} target="_blank">
                      <img src={value.image} alt="Partner Image" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
