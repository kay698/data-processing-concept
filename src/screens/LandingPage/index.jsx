import React from "react";
import { LandingPageWrap } from "./styles";
import GeneralLayout from "../../components/Layout";
import HeroSection from "./HeroSection"

const LandingPage = () => {
  return (
    <GeneralLayout>
       <LandingPageWrap>
          <HeroSection />
        </LandingPageWrap> 
    </GeneralLayout>
  );
};

export default LandingPage;
