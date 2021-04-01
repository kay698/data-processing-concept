import styled from "styled-components";

export const YourChoiceWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 50px 0;
  position: relative;

  .droplets {
    width: 100%;
    height: auto;
    top: 0;
    position: absolute;
    z-index: -1;
  }

  .logosWrap {
    .logoDiv {
      margin: 0 50px;
      opacity: 0.2;
      width: 100px;
      height: 20px;

      img {
        width: auto;
        height: 100%;
      }

      @media (max-width: 1260px) {
        margin: 0 30px;
      }
      @media (max-width: 1000px) {
        margin: 0 10px;
      }
      @media (max-width: 1000px) {
        width: max-content;
      }
      @media (max-width: 600px) {
        opacity: 0.4;
        height: 10px;
      }
      @media (max-width: 370px) {
        margin: 0 20px 20px 20px;
      }
    }
  }

  .header {
    margin: 60px 0 30px 0;
    h1 {
      font-size: 42px;
      line-height: 50px;
      text-align: center;
      color: #99efd0;
      font-weight: bold;
      @media (max-width: 460px) {
        font-size: 36px;
      }
    }
    p {
      font-size: 16px;
      line-height: 22px;
      width: 80%;
      text-align: center;
      color: #8476aa;
      margin-top: 10px;
    }
  }

  .contentWrap {
    @media (max-width: 1350px) {
      width: 100%;
    }
    .contentSubWrap {
      margin: 50px;

      @media (max-width: 1500px) {
        margin: 50px 30px;
      }
      @media (max-width: 780px) {
        margin: 30px 10px;
      }
    }
    h5 {
      width: 218px;
      height: 22px;
      font-size: 18px;
      line-height: 22px;
      color: #99efd0;
    }
    p {
      margin-top: 20px;
      width: 247px;
      height: 66px;
      font-size: 14px;
      line-height: 22px;
      color: #8476aa;
    }
  }
`;
