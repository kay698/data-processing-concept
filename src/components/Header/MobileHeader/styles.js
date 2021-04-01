import styled from "styled-components";

export const MobileWrap = styled.div`
  width: 100vw;
  height: max-conntent;
  z-index: 1000000;
  position: fixed;
  right: 0;
  transition: all 0.3s ease;
  padding-bottom: 10px;

  display: none;
  @media (max-width: 700px) {
    display: block;
  }
  .listParentWrap {
    overflow: hidden;
  }
  .listMianHeader {
    padding-bottom: 10px;
  }

  svg {
    font-size: 35px;
    line-height: 20px;
    letter-spacing: 2px;
    color: #b5b5b5;
    transition: all 0.3s ease;
    animation: fade 0.8s 1 ease;
    margin-right: 7%;

    :hover {
      color: white;
    }
  }

  .logoWrap {
    width: 40px;
    height: 40px;
    margin-left: 7%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .listWrap {
    background: linear-gradient(222.26deg, #3b1d60 1.22%, #040d3e 106.28%);
    transition: all 0.3s ease;
    height: ${(props) => (props.showMobileMenu ? "400px" : "0px")};

    button {
      margin: 10px 7%;
    }
    ul {
      padding: 0;
      width: 100%;
      margin-top: 40px;
    }

    li {
      margin: 10px 7%;
      a {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #b5b5b5;
        transition: all 0.3s ease;

        :hover {
          color: white;
        }
      }
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
