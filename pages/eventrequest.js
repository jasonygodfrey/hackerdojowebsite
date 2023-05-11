import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const eventrequest = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="EVENT REQUEST" BGImage="/images/hackerdojobackground.png" />

      

      <ContactForm />

      <Footer />
    </>
  );
};

export default eventrequest;
