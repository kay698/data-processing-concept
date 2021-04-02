import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { HeroSectionWrap } from "./styles";
import HeroImage from "../../../assets/Images/heroPic.png";
import CustomButton from "../../../components/Buttons";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import "aos/dist/aos.css";

const HeroSection = () => {
  return (
    <HeroSectionWrap>
      <FlexibleDiv
        alignItems="flex-start"
        className="heroBodyWrap"
        flexWrap="no-wrap"
      >
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="HeaderTextSection"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h3 className="HeaderSection__headerText">
            Many reasons to get up and start to get back in the business
          </h3>
          <h6>
            The harder you work for something, the greater you’ll feel when you
            achieve it.
          </h6>
          <FlexibleDiv
            width="320px"
            justifyContent="space-between"
            height="70px"
            className="buttonsWrap"
          >
            <CustomButton text="Learn more" />
            <CustomButton text="Demo" outline />
          </FlexibleDiv>
          <FlexibleDiv
            width="max-content"
            justifyContent="space-between"
            className="videoSection"
          >
            <FlexibleDiv className="video">
              <PlayCircleFilledIcon />
            </FlexibleDiv>
            <FlexibleDiv
              className="vdeoText"
              flexDir="column"
              alignItems="flex-start"
              width="max-content"
              height="100%"
            >
              <p>
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>
              <span>Watch preview</span>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
        <FlexibleDiv width="50%" height="600px" className="imageWrap">
          <img alt="hero section" src={HeroImage} />
        </FlexibleDiv>
      </FlexibleDiv>
    </HeroSectionWrap>
  );
};

export default HeroSection;
