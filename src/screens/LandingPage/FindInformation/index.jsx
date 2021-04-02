import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { FindInformationWrap } from "./styles";
import Knife from "../../../assets/Images/Swiss-knife.png";
import Connect from "../../../assets/Images/possible.png";
import Droplets from "../../../assets/Images/saveMoneyPic.png";
import MainImage from "../../../assets/Images/Mask.png";
import FullOval from "../../../assets/Images/fullOval.png";
import OutlineOval from "../../../assets/Images/outlineOval.png";
import Rectangle from "../../../assets/Images/rectangleDots.png";
import Square from "../../../assets/Images/squareDots.png";
import "aos/dist/aos.css";

const FindInformation = () => {
  return (
    <FindInformationWrap>
      <img src={Droplets} alt="droplets" className="dropletImage" />
      <FlexibleDiv justifyContent="space-evenly" className="findInfoWrap">
        <FlexibleDiv
          flexDir="column"
          width="max-content"
          alignItems="flex-start"
          className="findInfo__picSection"
        >
          <div className="rectangle">
            <img src={Rectangle} alt="recttangle" />
          </div>
          <div className="outlineOval">
            <img src={OutlineOval} alt="outline oval" />
          </div>
          <div className="fullOval">
            <img src={FullOval} alt="full oval" />
          </div>
          <div className="mainImage">
            <img src={MainImage} alt="info" />
          </div>
          <div className="square">
            <img src={Square} alt="square" />
          </div>
        </FlexibleDiv>

        <FlexibleDiv
          width="max-content"
          className="findInfo_textsWrap"
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="max-content"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <FlexibleDiv
            justifyContent="flex-start"
            alignItems="flex-start"
            width="max-content"
            className="findInfo_textsWrap"
            flexDir="column"
          >
            <h4>Help Finding Information Online</h4>
            <span>
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </span>
          </FlexibleDiv>
          <FlexibleDiv width="max-content" className="bodyContentWrap">
            <FlexibleDiv
              width="300px"
              height="max-content"
              alignItems="flex-start"
              justifyContent="flex-start"
              className="contentSubWrap"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              flexDir="column"
            >
              <div className="iconDiv">
                <img src={Knife} alt="logo" />
              </div>

              <h5>Feature Two</h5>
              <p>
                Fully customizable and neatly organized components will help you
                work faster{" "}
              </p>
            </FlexibleDiv>
            <FlexibleDiv
              width="300px"
              height="max-content"
              alignItems="flex-start"
              justifyContent="flex-start"
              className="contentSubWrap"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              flexDir="column"
            >
              <div className="iconDiv">
                <img src={Connect} alt="logo" />
              </div>

              <h5>Feature Two</h5>
              <p>
                Fully customizable and neatly organized components will help you
                work faster{" "}
              </p>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </FindInformationWrap>
  );
};

export default FindInformation;
