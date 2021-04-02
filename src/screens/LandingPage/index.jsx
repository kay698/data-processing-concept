import React from "react";
import { LandingPageWrap } from "./styles";
import GeneralLayout from "../../components/Layout";
import HeroSection from "./HeroSection";
import YourChoice from "./YourChoiceSection";
import IncreaseTraffic from "./IncreaseTraffic";
import SaveMoney from "./SaveMoney";
import NextProject from "./NextProject";
import BetterBusiness from "./BetterBusiness";
import FindInformation from "./FindInformation";

const LandingPage = () => {
  return (
    <GeneralLayout>
      <LandingPageWrap>
        <HeroSection />
        <YourChoice />
        <IncreaseTraffic />
        <SaveMoney />
        <NextProject />
        <BetterBusiness />
        <FindInformation />
      </LandingPageWrap>
    </GeneralLayout>
  );
};

export default LandingPage;
