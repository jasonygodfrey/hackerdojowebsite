import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

const featuredServicesData = [
  {
    iconName: "pe-7s-filter",
    title: "MEETUP EVENTS CALENDER",
    bgText: "Ia",
    shortText:
      "Daily: Startups, Events, Lectures, Hackathons, DevHouses, tinkering, brainstorming, co-working, and more!",
    viewDetails: "/service-details",
    backgroundImage: "images/pacifichackers.png",
  },
  {
    iconName: "pe-7s-display1",
    title: "⚡LIGHTNING TALKS⚡",
    bgText: "Ba",
    shortText:
      "Share your ideas, tech projects, practice your startup pitch, or anything a techie could want to learn!",
    viewDetails: "/service-details",
    backgroundImage: "images/lightningtalks2.png",
  },
  {
    iconName: "pe-7s-plugin",
    title: "Interaction Designer",
    bgText: "Id",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-arc",
    title: "Information Architect",
    bgText: "Ia",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-diamond",
    title: "Visual Designer",
    bgText: "Vd",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-helm",
    title: "Content Strategist",
    bgText: "Cs",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
  {
    iconName: "pe-7s-magnet",
    title: "UX Strategist",
    bgText: "Ux",
    shortText:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    viewDetails: "/service-details",
  },
];

const FeaturedServices = () => {
  return (
    <>
      <section className="featured-services-area">
        <div className="container">
          <div className="row">
            <Swiper
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="featured-services-slides"
            >
              {featuredServicesData &&
                featuredServicesData.map((value, i) => (
                  <SwiperSlide key={i}>
                  <div className="col-lg-12">
                    <div className="featured-services-box"
                      style={{ 
                        backgroundImage: `url(${value.backgroundImage})`,
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center'
                      }}
                    >
                   
                        
                        <h3>
                          <Link href={value.viewDetails}>{value.title}</Link>
                        </h3>

                        <p>{value.shortText}</p>

                        <Link
                          href={value.viewDetails}
                          className="read-more-btn"
                        >
                          Read More
                        </Link>

                        <div className="back-text">
                          {value.bgText}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedServices;
