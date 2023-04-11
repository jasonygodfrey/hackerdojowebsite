import React from "react";

const funFactsData = [
  {
    iconName: "pe-7s-like",
    number: "Learn",
    shortText:
      "Be curious, learn from others, share your ideas. We are all about leveling up new skills and collaboration. Find mentors and get feedback on your ideas. Learn about the startups and other projects here. Check out our Meetup Page to attend the next event.",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-diamond",
    number: "Play",
    shortText:
      "Jump in the sandbox with other hackers, entrepreneurs, artist, makers, innovators, designers and scientists. You can drop in to enjoy some free coffee and free wifi for the day. Rock out in our Music Corner or attend Friday Socials. Come for a coding jam session.",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-portfolio",
    number: "Build",
    shortText:
      "Want to build something to save the world or solve a problem? Awesome, we have a tools and support. Hardware and software enthusiasts are encouraged to connect with us. Contribute to our Github or check out our Wiki to get started.",
    aosDelay: "300",
  },
];

const FunFacts = () => {
  return (
    <>
      <div className="pt-100 pb-70 bg-fcfbfb">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="funfact-card"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    
                    <h3>
                      {value.number} <span></span>
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

export default FunFacts;
