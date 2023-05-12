import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "COMMUNITY",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "FREE EVENTS",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "MEETING ROOMS",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "ELECTRONICS LAB",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "3D PRINTING LAB",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "LASER LAB",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
  {
    iconName: "pe-7s-headphones bg-6610f2",
    title: "24/7 ACCESS",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "700",
  },
  {
    iconName: "pe-7s-users bg-13c4a1",
    title: "PRIVATE DESKS",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "800",
  },
  {
    iconName: "pe-7s-comment bg-fc3549",
    title: "CLASSES & MENTORSHIP",
    shortText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    viewDetails: "/service-details",
    aosDelay: "900",
  },
];

const ServicesStyleFour = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {servicesData &&
              servicesData.map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one white-bg text-center">
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.viewDetails}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleFour;
