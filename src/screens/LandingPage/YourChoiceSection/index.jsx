import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { YourChoiceWrap } from "./styles";
import { LogoList, ChoiceContents } from "../../../helpers/yourChoiceHelpers";
import Typography from "@material-ui/core/Typography";
import Droplets from "../../../assets/Images/yourChoiceImage.png";

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
      <FlexibleDiv className="header" flexDir="column">
        <Typography variant={"h1"}> Your Choice</Typography>
        <p>
          There are many reasons to get down and start to get depressed about
          your situation.{" "}
        </p>
      </FlexibleDiv>

      <FlexibleDiv >
        <FlexibleDiv  width="80%"  className="contentWrap">
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
              <Typography variant={"h5"}>{item.header}</Typography>
              <p>
                {item.body}
              </p>
            </FlexibleDiv>
          </FlexibleDiv>
        ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </YourChoiceWrap>
  );
};

export default YourChoice;
