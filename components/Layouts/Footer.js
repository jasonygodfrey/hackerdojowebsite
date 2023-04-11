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
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio/">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/team/">
                      Team
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
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/contact/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing/">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/">
                      Faq
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions/">
                      Terms & Conditions
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
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> 855 Maude Avenue
Mountain View, CA 94043.
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
              Copyright &copy; {currentYear} Hacker Dojo. All Rights Reserved.
            <br></br>
  Website by
  <a href="https://JasonGodfrey.dev" target="_blank" rel="noopener noreferrer"> JasonGodfrey.Dev</a>
  
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
