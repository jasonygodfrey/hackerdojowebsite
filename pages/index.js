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

const Index = () => {
  return (
    <>
    <head>
    <script>
          {`(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3486958,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>
    </head>
      <Navbar />

      <MainBanner />



    

   

     

      





      <OurStory/>

      <FindUs/>

      <MemberBenefits/>

      <Team />

      <Partner />

      <Footer />
    </>
  );
};

export default Index;
