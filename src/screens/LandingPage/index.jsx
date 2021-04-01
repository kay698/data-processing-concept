import React from "react";
import { LandingPageWrap } from "./styles";
import GeneralLayout from "../../components/Layout";
import HeroSection from "./HeroSection";
import YourChoice from "./YourChoiceSection";

const LandingPage = () => {
  return (
    <GeneralLayout>
      <LandingPageWrap>
        <HeroSection />
        <YourChoice />
      </LandingPageWrap>
    </GeneralLayout>
  );
};

export default LandingPage;
