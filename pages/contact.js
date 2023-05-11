import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact Us" BGImage="/images/hackerdojobackground.png" />

      <ContactInfo />

      <ContactForm />



      <Footer />
    </>
  );
};

export default Contact;
