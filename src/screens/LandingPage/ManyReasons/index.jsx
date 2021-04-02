import React from "react";
import { FlexibleDiv } from "../../../components/FlexBox/styles";
import { ManyReasonsWrap } from "./styles";
import CustomButton from "../../../components/Buttons";
import MainImage from "../../../assets/Images/manyReasonsPic.png";
import "aos/dist/aos.css";

const ManyReasons = () => {
  return (
    <ManyReasonsWrap>
      <img src={MainImage} alt="bgImage" className="bgimage" />
      <FlexibleDiv>
        <FlexibleDiv className="manyReasonsWrap" flexDir="column">
          <h2>There are many reasons to get down</h2>
          <span>
            There are many reasons to get down and start to get depressed about
            your situation.{" "}
          </span>

          <div className="inputDiv">
            <input type="email" placeholder="enter your email address" />
            <CustomButton text="Send" />
          </div>

          <small>No spam. Only releases, updates and discounts</small>
        </FlexibleDiv>
      </FlexibleDiv>
    </ManyReasonsWrap>
  );
};

export default ManyReasons;
