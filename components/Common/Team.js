import React from "react";

const teamMemberData = [
  {
    image: "/images/team/circle-team1.jpg",
    name: "Emily Johnson",
    designation: "Board Chair (2021-present)",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/emilymjohnson/",
      },
    ],
  },
  {
    image: "/images/team/circle-team2.jpg",
    name: "David Weekly ",
    designation: "Cofounder of Hacker Dojo, Board Member, & Secretary (2009-present)",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/dweekly/",
      },
    ],
  },
  {
    image: "/images/team/circle-team3.jpg",
    name: "Olya Zarembo",
    designation: "Board Member (2018-present)",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/olyaz/",
      },

    ],
  },
  {
    image: "/images/team/circle-team4.jpg",
    name: "Tom Harrison",
    designation: "Board Member (2020-present)",
    aosDelay: "400",

    socialLinks: [
      {
        iconName: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/tomicles/ ",
      },

    ],
  },
];

const Team = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Board of Directors </h2>
            <p>
              
            </p>
          </div>

          <div className="row justify-content-center">
            {teamMemberData &&
              teamMemberData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="team-card text-center"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <img
                      src={value.image}
                      alt="Image"
                      className="rounded-circle"
                    />

                    <div className="team-caption">
                      <h3>{value.name}</h3>
                      <p>{value.designation}</p>

                      <ul>
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
