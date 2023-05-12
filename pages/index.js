import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
import Services from "../components/HomePages/DefaultHome/Services";
import About from "../components/HomePages/DefaultHome/About";
import OurWorks from "../components/HomePages/DefaultHome/OurWorks";
import WorkProcess from "../components/HomePages/DefaultHome/WorkProcess";
import Feedback from "../components/Common/Feedback";
import Team from "../components/Common/Team";
import FunFacts from "../components/Common/FunFacts";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";
import OurStory from "../components/OurStory";
import MemberBenefits from "../components/MemberBenefits";
import Faces from "../components/Faces";
import FindUs from "../components/FindUs";
import PricingStyleTwo from "../components/Pricing/PricingStyleTwo";
import WorksStyleOne from "../components/Portfolio/WorksStyleOne";
import ServicesStyleFour from "../components/Services/ServicesStyleFour";
import AboutContent from "../components/About/AboutContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";


const Index = () => {
  return (
    <>

      <Navbar />

      <MainBanner />

      
      <WorksStyleOne />
      <AboutContent />
      <ServicesStyleFour />

   
      <PricingStyleTwo/>
     

      
      <FindUs />
      <Partner />
      <Team />
      <Feedback />
<CtaAreaTwo />
      <Footer />
    </>
  );
};

export default Index;
