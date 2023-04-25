import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="Logo" />
                  </Link>
                </div>

                <p>
                  "The Soul of Silicon Valley" - Financial Times
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/hackerdojo/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/hackerdojo" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/hackerdojo/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/hackerdojo/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/tvce5JtT" target="_blank">
                      <i className="fa-brands fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.meetup.com/hackerdojo/" target="_blank">
                      <i className="fa-brands fa-meetup"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/HackerDojo" target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitch.tv/hackerdojotv" target="_blank">
                      <i className="fa-brands fa-twitch"></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="200"
              >
                <h3>Services</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wiki.hackerdojo.com/index.php?title=Main_Page">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.meetup.com/hackerdojo/">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/hackerdojo/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="https://hackerdojo.spaces.nexudus.com/?public&">
                      Membership Pricing
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="300"
              >
                <h3>Membership</h3>

                <ul className="list">
                  
                  <li>
                    <Link href="#"> 
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wiki.hackerdojo.com/index.php?title=Hacker_Dojo_Policies">
                      Our Policies
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wiki.hackerdojo.com/index.php?title=Bylaws">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="https://drive.google.com/drive/u/0/folders/0AKfuxK7ZD6_OUk9PVA">
                    501(c)3 Non-Profit
                    </Link>
                  </li>
                  <li>
                  EIN # 26-4812213
                  </li>
                  <li>
                    <Link href="https://drive.google.com/drive/folders/1ltGVrYmOATjKwdnu27n86pLId6KgKglg?usp=sharing">
                    Board Meeting Minutes
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1200" 
                data-aos-delay="400"
              >
                <h3>Resources</h3>

                <ul className="get-in-touch">
                <li>
  <i className="fa-solid fa-location-dot"></i>
  <a href="https://goo.gl/maps/Pm5sXR6CNjZxFYD49" target="_blank" rel="noopener noreferrer">
    855 Maude Avenue Mountain View, California, 94043, United States
  </a>
</li>

                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+650-429-8605">(650) 429-8605</a> 
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:Tiyanna@hackerdojo.com">Tiyanna@hackerdojo.com</a>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
               &copy; {currentYear} Hacker Dojo. All Rights Reserved.        <a
        href="https://JasonGodfrey.dev"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#1c1c1c" }}
      >
        Website Developer Contact
      </a>
            <br></br>

            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
