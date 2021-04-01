import React, { useEffect, useRef, useState } from "react";
import { throttle } from "lodash"
import { HeaderWrap } from "./styles";
import { FlexibleDiv } from "../FlexBox/styles";
import CustomButton from "../Buttons";
import { NavItems } from "../../helpers/headerNav";
import Logo from "../../assets/Images/Logo.png";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();
  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 60;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", throttle(handleScroll, 100));
    return () => {
      document.removeEventListener("scroll", throttle(handleScroll, 100));
    };
  }, []);
  return (
    <HeaderWrap
      style={{
        backgroundColor: navBackground ? "#25043b" : "transparent",
        transition: ".3s ease",
      }}
    >
      <FlexibleDiv
        height="90%"
        alignItems="flex-end"
        width="100%"
        justifyContent="space-around"
        className="desktopMenu"
      >
        <FlexibleDiv width="max-content" className="listWrap">
          <div className="logoWrap">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <FlexibleDiv width="max-content">
              {NavItems.map((list) => (
                <li>
                  <a href="/">{list.item}</a>
                </li>
              ))}
            </FlexibleDiv>
          </ul>
        </FlexibleDiv>
        <FlexibleDiv
          width="220px"
          className="buttonsWrap"
          justifyContent="space-between"
        >
          <CustomButton text="Sign in" outline />
          <CustomButton text="Sign up" />
        </FlexibleDiv>
      </FlexibleDiv>
      <MobileHeader className="mobilMenu"  navBackground={navBackground}/>
    </HeaderWrap>
  );
};

export default Header;
