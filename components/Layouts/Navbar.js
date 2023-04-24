import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <img src="/images/logo.png" alt="logo" />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${currentPath == "/" && "active"}`}
                  >
                    HOME 
                  </Link>

                  
                </li>



               
                <li className="nav-item">
                  <Link
                    href="https://wiki.hackerdojo.com/index.php?title=Main_Page"
                    className={`nav-link ${
                      currentPath == "https://wiki.hackerdojo.com/index.php?title=Main_Page" && "active"
                    }`}
                  >
                    ABOUT 
                  </Link>

                  





                  
                </li>

               

                <li className="nav-item">
                  <Link
                    href="https://www.meetup.com/hackerdojo/"
                    className={`nav-link ${
                      currentPath == "https://www.meetup.com/hackerdojo//" && "active"
                    }`}
                  >
                    EVENTS <span className="arrow-down">&#x25BE;</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit"
                        className={`nav-link ${
                          currentPath == "https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit" && "active"
                        }`}
                      >
                        EVENT REQUEST
                      </Link>
                    </li>

                   

                    
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    href="https://givebutter.com/givingtuesdayhackerdojo"
                    className={`nav-link ${
                      currentPath == "https://givebutter.com/givingtuesdayhackerdojo" && "active"
                    }`}
                  >
                    DONATE
                  </Link>
                </li>


                <li className="nav-item">
                  <Link
                    href="https://www.facebook.com/hackerdojo/"
                    className={`nav-link ${
                      currentPath == "https://www.facebook.com/hackerdojo/" && "active"
                    }`}
                  >
                    CONTACT <span className="arrow-down">&#x25BE;</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="https://www.facebook.com/hackerdojo/"
                        className={`nav-link ${
                          currentPath == "https://www.facebook.com/hackerdojo/" && "active"
                        }`}
                      >
                        Facebook
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://twitter.com/hackerdojo"
                        className={`nav-link ${
                          currentPath == "https://twitter.com/hackerdojo" && "active"
                        }`}
                      >
                        Twitter
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://www.linkedin.com/company/hackerdojo/"
                        className={`nav-link ${
                          currentPath == "https://www.linkedin.com/company/hackerdojo/" && "active"
                        }`}
                      >
                        Linkedin
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://www.instagram.com/hackerdojo/"
                        className={`nav-link ${
                          currentPath == "https://www.instagram.com/hackerdojo/" && "active"
                        }`}
                      >
                        Instagram
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://discord.gg/tvce5JtT"
                        className={`nav-link ${
                          currentPath == "https://discord.gg/tvce5JtT" && "active"
                        }`}
                      >
                        Discord
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://www.meetup.com/hackerdojo/"
                        className={`nav-link ${
                          currentPath == "https://www.meetup.com/hackerdojo/" && "active"
                        }`}
                      >
                        Meetup
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://www.youtube.com/HackerDojo"
                        className={`nav-link ${
                          currentPath == "https://www.youtube.com/HackerDojo" && "active"
                        }`}
                      >
                        Youtube
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://www.twitch.tv/hackerdojotv"
                        className={`nav-link ${
                          currentPath == "https://www.twitch.tv/hackerdojotv" && "active"
                        }`}
                      >
                        Twitch
                      </Link>
                    </li>

                    
                  </ul>
                </li>
                <li className="nav-item">
                 

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/about/"
                        className={`nav-link ${
                          currentPath == "/about/" && "active"
                        }`}
                      >
                        About
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/service-details/"
                        className={`nav-link ${
                          currentPath == "/service-details/" && "active"
                        }`}
                      >
                        Services Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio/"
                        className={`nav-link ${
                          currentPath == "/portfolio/" && "active"
                        }`}
                      >
                        Portfolio
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/portfolio-details/"
                        className={`nav-link ${
                          currentPath == "/portfolio-details/" && "active"
                        }`}
                      >
                        Portfolio Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/team/"
                        className={`nav-link ${
                          currentPath == "/team/" && "active"
                        }`}
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/faq/"
                        className={`nav-link ${
                          currentPath == "/faq/" && "active"
                        }`}
                      >
                        FAQ
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/404/"
                        className={`nav-link ${
                          currentPath == "/404/" && "active"
                        }`}
                      >
                        404 error
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/coming-soon/"
                        className={`nav-link ${
                          currentPath == "/coming-soon/" && "active"
                        }`}
                      >
                        Coming Soon
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/services/"
                        className={`nav-link ${
                          currentPath == "/services/" && "active"
                        }`}
                      >
                        Services Style 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-2/"
                        className={`nav-link ${
                          currentPath == "/services-2/" && "active"
                        }`}
                      >
                        Services Style 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-3/"
                        className={`nav-link ${
                          currentPath == "/services-3/" && "active"
                        }`}
                      >
                        Services Style 3
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services-4/"
                        className={`nav-link ${
                          currentPath == "/services-4/" && "active"
                        }`}
                      >
                        Services Style 4
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/service-details/"
                        className={`nav-link ${
                          currentPath == "/service-details/" && "active"
                        }`}
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              

              <div className="others-options">
                <Link href="https://hackerdojo.spaces.nexudus.com/login" className="btn btn-primary">
                  MEMBER PORTAL
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
