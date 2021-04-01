import styled from "styled-components";

export const SaveMoneyWrap = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px 0 100px 0;
  position: relative;

  .droplets {
    position: absolute;
    left: -10px;
    top: -150px;
    z-index: -1;
  }

  .headerTextWrap {
    h3 {
      width: 864px;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      letter-spacing: 0.33px;
      color: #99efd0;
      margin-top: 30px;

      span {
        color: #f2994a;
      }

      @media (max-width: 920px) {
        width: 90%;
        font-size: 30px;
        line-height: 25px;
      }
      @media (max-width: 620px) {
        font-size: 20px;
      }
    }

    h6 {
      width: 414px;
      height: 40px;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #8476aa;
      margin: 20px 0;

      @media (max-width: 550px) {
        width: 70%;
        font-size: 13px;
      }
    }
  }

  .contentWrap {
    .contentSubWrap{
      margin: 0 20px;
    }
    h3 {
      height: 42px;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      text-align: center;
      letter-spacing: 0.33px;
      color: #99efd0;
      width: 100%;
      margin: 30px 0 10px 0;
    }
    h6 {
      height: 60px;
      width: 100%;
      font-size: 15px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #8476aa;
    }
    @media (max-width: 1300px) {
        width: 100%;
      }
  }
`;
