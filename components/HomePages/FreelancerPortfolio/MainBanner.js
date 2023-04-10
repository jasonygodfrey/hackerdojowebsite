import React from "react";
import Link from "next/link";

const socialsLinkData = [
  {
    iconName: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/",
  },
  {
    iconName: "fa-brands fa-skype",
    url: "https://www.skype.com/",
  },
  {
    iconName: "fa-brands fa-whatsapp",
    url: "https://www.whatsapp.com/",
  },
  {
    iconName: "fa-brands fa-gitlab",
    url: "https://www.gitlab.com/",
  },
  {
    iconName: "fa-brands fa-dribbble",
    url: "https://www.dribbble.com/",
  },
];

const MainBanner = () => {
  return (
    <>
      <div className="freelancer-portfolio-banner-area">
        <div className="container">
          <div className="freelancer-portfolio-banner-content">
            <img
              src="/images/freelancer-portfolio/freelancer-profile.jpg"
              alt="Profile Img"
              className="profile-img"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            />

            <span
              className="sub-title"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Welcome To My Portfolio!
            </span>

            <h1
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Hi, I'm Johnson Roy <span>Web Developer.</span>
            </h1>

            <p data-aos="fade-in" data-aos-duration="1200" data-aos-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <ul
              className="socials-link"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              {socialsLinkData &&
                socialsLinkData.map((value, i) => (
                  <li key={i}>
                    <a href={value.url} target="_blank">
                      <i className={value.iconName}></i>
                    </a>
                  </li>
                ))}
            </ul>

            <Link
              href="/contact"
              className="default-btn-two"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              Contact Me <i className="fas fa-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
