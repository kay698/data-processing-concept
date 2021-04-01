import React, { useState } from "react";
import { MobileWrap } from "./styles";
import { FlexibleDiv } from "../../FlexBox/styles";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import ClearIcon from "@material-ui/icons/Clear";
import CustomButton from "../../Buttons";
import { NavItems } from "../../../helpers/headerNav";
import Logo from "../../../assets/Images/Logo.png";

const MobileHeader = ({ navBackground }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <MobileWrap
      showMobileMenu={showMobileMenu}
     
    >
      <FlexibleDiv
        height="100%"
        alignItems="center"
        width="100%"
        justifyContent="space-around"
        flexDir="column"
        className="listParentWrap"
      >
        <FlexibleDiv
          justifyContent="space-between"
          width="100%"
          flexWrap="no-wrap"
          height="80px"
          className="listMianHeader"
          alignItems="flex-end"


          style={{
            backgroundColor: navBackground ? "#25043b" : "transparent",
            transition: ".3s ease",
          }}
        >
          <div className="logoWrap">
            <img src={Logo} alt="logo" />
          </div>

          {!showMobileMenu && <LineWeightIcon onClick={handleMobileMenu} />}
          {showMobileMenu && <ClearIcon onClick={handleMobileMenu} />}
        </FlexibleDiv>
        <FlexibleDiv
          className="listWrap"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexDir="column"
          flexWrap="no-wrap"
        >
          <ul>
            <FlexibleDiv
              flexDir="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {NavItems.map((list) => (
                <li>
                  <a href="/">{list.item}</a>
                </li>
              ))}
            </FlexibleDiv>
          </ul>
          <CustomButton text="Sign in" sm outline />
          <CustomButton text="Sign up" sm />
        </FlexibleDiv>
      </FlexibleDiv>
    </MobileWrap>
  );
};

export default MobileHeader;
