import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { YourChoiceWrap } from "./styles";
import { LogoList, ChoiceContents } from "../../../helpers/yourChoiceHelpers";
import Droplets from "../../../assets/Images/yourChoiceImage.png";
import "aos/dist/aos.css";

const YourChoice = () => {
  return (
    <YourChoiceWrap>
      <img src={Droplets} alt="droplets" className="droplets" />
      <FlexibleDiv className="logosWrap">
        {LogoList.map((item, index) => (
          <div className="logoDiv" key={index}>
            <img src={item} alt="logo" />
          </div>
        ))}
      </FlexibleDiv>
      <FlexibleDiv
        className="header"
        flexDir="column"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1> Your Choice</h1>
        <p>
          There are many reasons to get down and start to get depressed about
          your situation.{" "}
        </p>
      </FlexibleDiv>

      <FlexibleDiv>
        <FlexibleDiv
          width="80%"
          className="contentWrap"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {ChoiceContents.map((item, index) => (
            <FlexibleDiv
              width="300px"
              height="max-content"
              alignItems="flex-start"
              justifyContent="space-between"
              className="contentSubWrap"
            >
              <div className="iconDiv" key={index}>
                <img src={item.icon} alt="logo" />
              </div>
              <FlexibleDiv
                width="max-content"
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDir="column"
              >
                <h5>{item.header}</h5>
                <p>{item.body}</p>
              </FlexibleDiv>
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </YourChoiceWrap>
  );
};

export default YourChoice;
