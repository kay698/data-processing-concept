import styled from "styled-components";

export const FindInformationWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 50px 0 100px 0;
  position: relative;

  .dropletImage {
    position: absolute;
    right: 0;
    top: -150px;
    z-index: -1;
    transform: rotate(180deg);
  }

  .findInfoWrap {
    @media (max-width: 1300px) {
      justify-content: space-between;
      margin: 0 100px;
    }
    @media (max-width: 980px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
  }

  .findInfo_textsWrap {
    h4 {
      font-weight: bold;
      font-size: 26px;
      letter-spacing: 0.325px;
      color: #99efd0;
    }
    span {
      width: 414px;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #8476aa;
    }

    @media (max-width: 980px) {
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 1300px) and (min-width: 1180px) {
      margin-right: 100px;
    }

    @media (max-width: 450px) {
      p,
      h5,
      h4,
      span {
        width: 300px;
      }
    }
  }

  .bodyContentWrap {
    @media (max-width: 980px) {
      flex-direction: column;
      justify-content: flex-start;
      margin-left: -10px;
    }
    @media (max-width: 450px) {
      margin-left: 0;
    }
  }
  .contentSubWrap {
    margin: 20px 0;
    h5 {
      font-weight: bold;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 0.2px;
      color: #99efd0;
      margin: 10px 0;
    }
    p {
      width: 250px;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #8476aa;
    }

    @media (max-width: 1300px) {
      width: 100%;

      p {
        width: 300px;
      }
    }
    @media (max-width: 980px) {
      width: max-content;

      p {
        width: 400px;
      }
    }

    @media (max-width: 450px) {
      p {
        width: 300px;
      }
    }
  }

  .findInfo__picSection {
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .rectangle {
      width: 120px;
      height: 80px;
      z-index: -1;
      position: absolute;
      top: -30px;
      left: -30px;
    }
    .fullOval {
      width: 70px;
      height: 70px;
      z-index: -2;
      position: absolute;
      left: -40px;
      bottom: 150px;
    }
    .outlineOval {
      width: 100px;
      height: 100px;
      z-index: -1;
      position: absolute;
      left: -70px;
      bottom: 180px;
    }
    .square {
      width: 70px;
      height: 70px;
      z-index: -2;
      position: absolute;
      right: -40px;
      bottom: 150px;
    }

    @media (max-width: 1050px) {
      .mainImage {
        width: 300px;
        height: 400px;
      }

      .fullOval {
        bottom: 90px;
      }
      .outlineOval {
        bottom: 130px;
      }
    }

    @media (max-width: 980px) {
      margin-top: 100px;
      .mainImage {
        width: 350px;
        height: 450px;
      }

      .fullOval {
        bottom: 150px;
      }
      .outlineOval {
        bottom: 180px;
      }
    }

    @media (max-width: 500px) {
      margin-top: 100px;
      .mainImage {
        width: 280px;
        height: 380px;
      }

      .rectangle {
        width: 90px;
        height: 50px;
      }
      .fullOval {
        width: 50px;
        height: 50px;
      }
      .outlineOval {
        width: 80px;
        height: 80px;
      }
    }

    @media (max-width: 400px) {
      margin-right: 10%;
    }
  }
`;
