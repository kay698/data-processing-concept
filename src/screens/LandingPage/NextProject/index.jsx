import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { NextProjectWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../../../components/Buttons";
import NextImage from "../../../assets/Images/nextProjectImage.png";

const NextProject = () => {
  return (
    <NextProjectWrap>
      <FlexibleDiv className="headerTextWrap" flexDir="column" height="100%">
        <Typography variant={"h3"}>
          Create your <span>next project</span> with startup framework
        </Typography>
        <CustomButton text="Learn more" shadow />
        <img alt="frame" src={NextImage} />
      </FlexibleDiv>
    </NextProjectWrap>
  );
};

export default NextProject;
