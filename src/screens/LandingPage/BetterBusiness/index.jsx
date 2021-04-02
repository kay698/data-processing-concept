import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { BetterBusinessWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../../../components/Buttons";
import MainImage from "../../../assets/Images/businessPic.png";
import Path from "../../../assets/Images/Path.png";

const BetterBusiness = () => {
  return (
    <BetterBusinessWrap>
      <FlexibleDiv justifyContent="space-evenly" className="bodyWrap">
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="TextSection"
        >
          <Typography variant={"h3"} className="HeaderSection__headerText">
            Invest property for better <span>business</span>
          </Typography>
          <Typography variant={"h6"}>
            We are committed to processing the information in order to contact
            you and talk about your project. We are committed to processing the
            information.
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
          <FlexibleDiv width="max-content" className="path">
            <img src={Path} alt="path" />
          </FlexibleDiv>

          <FlexibleDiv className="contentWithPicWrap" flexDir="column">
            <FlexibleDiv height="50%">
              <img src={MainImage} alt="writing" />
            </FlexibleDiv>
            <FlexibleDiv
              className="picContentWrap"
              height="50%"
              width="100%"
              bgColor="white"
            >
              <FlexibleDiv
                height="100%"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexDir="column"
                width="80%"
                className="picContentSubWrap"
              >
                <p>Omah mukti residence</p>
                <span>Merpati sidomuncul 26 street, UK</span>
                <h4>$176,000</h4>
                <span>FUNDING REQUEST</span>
                <FlexibleDiv className="footer" justifyContent="space-between">
                  <FlexibleDiv
                    width="max-content"
                    flexDir="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <h5>13%</h5>
                    <span>Apr</span>
                  </FlexibleDiv>
                  <FlexibleDiv
                    width="max-content"
                    flexDir="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <h5>13%</h5>
                    <span>Apr</span>
                  </FlexibleDiv>
                  <FlexibleDiv
                    width="max-content"
                    flexDir="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <h5>13%</h5>
                    <span>Apr</span>
                  </FlexibleDiv>
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
          <FlexibleDiv className="monthWrap" flexDir="column">
            <p>6 month</p>
            <span>increase 12%</span>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </BetterBusinessWrap>
  );
};

export default BetterBusiness;
