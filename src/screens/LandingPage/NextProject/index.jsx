import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { NextProjectWrap } from "./styles";
import CustomButton from "../../../components/Buttons";
import NextImage from "../../../assets/Images/nextProjectImage.png";
import "aos/dist/aos.css";

const NextProject = () => {
  return (
    <NextProjectWrap>
      <FlexibleDiv
        className="headerTextWrap"
        flexDir="column"
        height="100%"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>
          Create your <span>next project</span> with startup framework
        </h3>
        <CustomButton text="Learn more" shadow />
        <img alt="frame" src={NextImage} />
      </FlexibleDiv>
    </NextProjectWrap>
  );
};

export default NextProject;
