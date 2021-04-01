import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { SaveMoneyWrap } from "./styles";
import Typography from "@material-ui/core/Typography";
import Droplets from "../../../assets/Images/saveMoneyPic.png";
import { SaveMoneyItems } from "../../../helpers/saveMoneyHelpers";

const SaveMoney = () => {
  return (
    <SaveMoneyWrap>
      <img src={Droplets} alt="droplets" className="droplets" />
      <FlexibleDiv className="headerTextWrap" flexDir="column">
        <Typography variant={"h3"}>
          3 Simple Ways To <span> Save </span>A Bunch Of <span>Money</span> When
          Buying A New Computer
        </Typography>
        <Typography variant={"h6"}>
          Fully customizable and neatly organized components will help you work
          faster without limiting creative freedom.
        </Typography>
      </FlexibleDiv>

      <FlexibleDiv>
        <FlexibleDiv width="80%" className="contentWrap">
          {SaveMoneyItems.map((item, index) => (
            <FlexibleDiv
              width="300px"
              height="max-content"
              alignItems="flex-start"
              justifyContent="space-between"
              className="contentSubWrap"
              key={index}
            >
              <Typography variant={"h3"}>{item.head}</Typography>
              <Typography variant={"h6"}>{item.content}</Typography>
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </SaveMoneyWrap>
  );
};

export default SaveMoney;
