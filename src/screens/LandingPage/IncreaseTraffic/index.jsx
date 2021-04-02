import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { IncreaseTrafficWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../../../components/Buttons";
import WritingImage from "../../../assets/Images/Rectangle.png";
import GraphImage from "../../../assets/Images/Group.png";
import Dots from "../../../assets/Images/dots.png";
import Path from "../../../assets/Images/Path.png";
import "aos/dist/aos.css";

const IncreaseTraffic = () => {
  return (
    <IncreaseTrafficWrap>
      <FlexibleDiv
        justifyContent="space-evenly"
        className="bodyWrap"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="TextSection"
        >
          <Typography variant={"h3"} className="HeaderSection__headerText">
            Increase your business <span>traffic </span>
          </Typography>
          <Typography variant={"h6"}>
            We are committed to processing the information in order to contact
            you and talk about your project.
          </Typography>
          <FlexibleDiv
            width="max-content"
            justifyContent="flex-start"
            height="70px"
            className="buttonsWrap"
          >
            <CustomButton text="Learn more" shadow />
          </FlexibleDiv>
        </FlexibleDiv>

        <FlexibleDiv
          // height="600px"
          width="max-content"
          className="picturesWrap"
        >
          <FlexibleDiv width="max-content" className="pathWrap">
            <img src={Path} alt="path" />
          </FlexibleDiv>
          <div className="graph">
            <img src={GraphImage} alt="graph" />
          </div>
          <div>
            <img src={WritingImage} alt="writing" className="parentPic" />
          </div>
          <div className="dot">
            <img src={Dots} alt="dots" />
          </div>
        </FlexibleDiv>
      </FlexibleDiv>
    </IncreaseTrafficWrap>
  );
};

export default IncreaseTraffic;
