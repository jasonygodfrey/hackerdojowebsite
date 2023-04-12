import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const latestNewsSliderData = [
  {
    image: "/images/blog/blog1.jpg",
    title: "Coming Soon",
    date: "Feb 15, 2023",
    category: "Events",
    shortText:
      "Preview Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    readMoreLink: "/blog-details",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "Coming Soon",
    date: "Feb 16, 2023",
    category: "Technology",
    shortText:
      "Preview Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    readMoreLink: "/blog-details",
  },
  {
    image: "/images/blog/blog3.jpg",
    title: "Coming Soon",
    date: "Feb 17, 2023",
    category: "IT Agency",
    shortText:
      "Preview Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    readMoreLink: "/blog-details",
  },
  {
    image: "/images/blog/blog4.jpg",
    title: "Coming Soon",
    date: "Feb 18, 2023",
    category: "Development",
    shortText:
      "Preview Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    readMoreLink: "/blog-details",
  },
];

const LatestNewsSlider = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Latest news & Recent Events</h2>
            <p>
              
            </p>
          </div>

          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="blog-slides"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {latestNewsSliderData &&
              latestNewsSliderData.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={value.readMoreLink}>
                        <img src={value.image} alt="image" />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.readMoreLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.date}</span>
                      <h3>
                        <Link href={value.readMoreLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      <Link href={value.readMoreLink} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNewsSlider;
