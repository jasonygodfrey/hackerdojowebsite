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
  
              {/* Here's your Member Portal button, moved outside the collapsible div */}
<div className={`navbar-member-portal ${menu ? 'd-none' : ''}`}>
  <Link href="https://hackerdojo.spaces.nexudus.com/login" className="btn btn-primary">
    MEMBER PORTAL
  </Link>
</div>

  
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
                    href="/startups"
                    className={`nav-link center-text ${
                      currentPath == "https://www.meetup.com/hackerdojo//" && "active"
                    }`}
                  >
                    FEATURED <span className="arrow-down">&#x25BE;</span>
                  </Link>
                  <ul className="dropdown-menu">
                  <li className="nav-item">
                      <Link
                        href="https://www.meetup.com/hackerdojo/"
                        className={`nav-link center-text ${
                          currentPath == "https://www.meetup.com/hackerdojo/" && "active"
                        }`}
                      >
                        STARTUPS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit"
                        className={`nav-link ${
                          currentPath == "https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit" && "active"
                        }`}
                      >
                        PROJECTS
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit"
                        className={`nav-link ${
                          currentPath == "https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit" && "active"
                        }`}
                      >
                        EVENTS BLOG
                      </Link>
                    </li>
                   

                    
                  </ul>
                </li>



               

               

                <li className="nav-item">
                  <Link
                    href="https://www.meetup.com/hackerdojo/"
                    className={`nav-link center-text ${
                      currentPath == "https://www.meetup.com/hackerdojo//" && "active"
                    }`}
                  >
                    EVENTS <span className="arrow-down">&#x25BE;</span>
                  </Link>
                  <ul className="dropdown-menu">
                  <li className="nav-item">
                      <Link
                        href="https://www.meetup.com/hackerdojo/"
                        className={`nav-link center-text ${
                          currentPath == "https://www.meetup.com/hackerdojo/" && "active"
                        }`}
                      >
                        MEETUP
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit"
                        className={`nav-link ${
                          currentPath == "https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit" && "active"
                        }`}
                      >
                        REQUEST AN EVENT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit"
                        className={`nav-link ${
                          currentPath == "https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit" && "active"
                        }`}
                      >
                        EVENTS BLOG
                      </Link>
                    </li>
                   

                    
                  </ul>
                </li>



                <li className="nav-item">
                  <Link
                    href="https://wiki.hackerdojo.com/index.php?title=Main_Page"
                    className={`nav-link center-text ${
                      currentPath == "https://www.meetup.com/hackerdojo//" && "active"
                    }`}
                  >
                    ABOUT <span className="arrow-down">&#x25BE;</span>
                  </Link>
                  <ul className="dropdown-menu">
                  <li className="nav-item">
                      <Link
                        href="/about"
                        className={`nav-link center-text ${
                          currentPath == "https://www.meetup.com/hackerdojo/" && "active"
                        }`}
                      >
                        HD WIKI
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit"
                        className={`nav-link ${
                          currentPath == "https://docs.google.com/forms/d/1fOr8c4IAWF2p8EIXT8p3xchXwRJ4i_Cw47e5twCceH8/edit" && "active"
                        }`}
                      >
                        DONATE
                      </Link>
                    </li>
                   

                    
                  </ul>
                </li>





                <li className="nav-item">
                  <Link
                    href="https://www.facebook.com/hackerdojo/"
                    className={`nav-link ${
                      currentPath == "https://www.facebook.com/hackerdojo/" && "active"
                    }`}
                  >
                    SOCIALS <span className="arrow-down">&#x25BE;</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/contact"
                        className={`nav-link ${
                          currentPath == "https://www.facebook.com/hackerdojo/" && "active"
                        }`}
                      >
                        Contact Us
                      </Link>
                    </li>

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
                      <Link
                        href="/about"
                        className={`nav-link center-text ${
                          currentPath == "https://www.meetup.com/hackerdojo/" && "active"
                        }`}
                      >
                        CONTACT US
                      </Link>
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
