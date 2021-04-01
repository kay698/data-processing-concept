import React from "react";
import { LandingPageWrap } from "./styles";
import GeneralLayout from "../../components/Layout";
import HeroSection from "./HeroSection";
import YourChoice from "./YourChoiceSection";
import IncreaseTraffic from "./IncreaseTraffic";
import SaveMoney from "./SaveMoney";

const LandingPage = () => {
  return (
    <GeneralLayout>
      <LandingPageWrap>
        <HeroSection />
        <YourChoice />
        <IncreaseTraffic />
        <SaveMoney />
      </LandingPageWrap>
    </GeneralLayout>
  );
};

export default LandingPage;
