import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { SaveMoneyWrap } from "./styles";
import Droplets from "../../../assets/Images/saveMoneyPic.png";
import { SaveMoneyItems } from "../../../helpers/saveMoneyHelpers";
import "aos/dist/aos.css";

const SaveMoney = () => {
  return (
    <SaveMoneyWrap>
      <img src={Droplets} alt="droplets" className="droplets" />
      <FlexibleDiv
        className="headerTextWrap"
        flexDir="column"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3>
          3 Simple Ways To <span> Save </span>A Bunch Of <span>Money</span> When
          Buying A New Computer
        </h3>
        <h6>
          Fully customizable and neatly organized components will help you work
          faster without limiting creative freedom.
        </h6>
      </FlexibleDiv>

      <FlexibleDiv>
        <FlexibleDiv
          width="80%"
          className="contentWrap"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          {SaveMoneyItems.map((item, index) => (
            <FlexibleDiv
              width="300px"
              height="max-content"
              alignItems="flex-start"
              justifyContent="space-between"
              className="contentSubWrap"
              key={index}
            >
              <h3>{item.head}</h3>
              <h6>{item.content}</h6>
            </FlexibleDiv>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </SaveMoneyWrap>
  );
};

export default SaveMoney;
