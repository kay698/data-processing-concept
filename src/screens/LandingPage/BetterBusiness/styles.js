import styled from "styled-components";

export const BetterBusinessWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 50px 0 100px 0;
  position: relative;

  .bgImage{
    position: absolute;
    z-index: -2;
    right: 0;
    top: 0;
    @media (max-width: 980px) {
     top: 300px;
    }
  }

  .contentWrap {
    @media (max-width: 1080px) {
      justify-content: space-between;
      padding: 0 40px;
    }
    @media (max-width: 980px) {
      flex-direction: column;
      padding: 0;
    }
  }
  .TextSection {
    h3 {
      width: 400px;
      font-weight: bold;
      font-size: 44px;
      color: #99efd0;
      span {
        color: #f2994a;
      }
      @media (max-width: 980px) {
        width: 100%;
        font-size: 30px;
      }
    }

    h6 {
      width: 468px;
      font-size: 18px;
      line-height: 22px;
      color: #8476aa;
      letter-spacing: 0.2px;
      margin: 30px 0;

      @media (max-width: 1200px) {
        width: 400px;
      }
      @media (max-width: 900px) {
        width: 300px;
      }
      @media (max-width: 980px) {
        width: 100%;
      }
    }
    @media (max-width: 980px) {
      width: 700px;
    }
    @media (max-width: 750px) {
      width: 80%;
    }
  }

  .picturesWrap {
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }

    .monthWrap {
      background: #516ea9;
      box-shadow: -8px 16px 60px rgba(82, 114, 139, 0.24);
      border-radius: 10px;
      padding: 20px 40px;
      width: max-content;
      margin: 150px 0 0 -25px;
      z-index: -1;

      p {
        height: 20px;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
        font-weight: bold;
        letter-spacing: 0.33px;
      }
      span {
        margin-top: 10px;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0.5px;
        color: #ffffff;
      }
    }

    .contentWithPicWrap {
      width: 320px;
      height: 480px;
      border-radius: 0 0 8.93861px 8.93861px;

      .picContentWrap {
        border-radius: 0 0 8.93861px 8.93861px;
      }
      p {
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
        color: #212b36;
        margin: 20px 0 7px 0;
        text-align: start;
      }
      span {
        font-size: 14px;
        letter-spacing: 0.5px;
        color: #637381;
        text-align: start;
      }
      h4 {
        font-size: 30px;
        margin: 0;
        color: #13c296;
        padding-top: 29px;
      }

      .footer {
        border-top: 1px solid #ddd;
        margin-top: 20px;
        padding-top: 20px;

        h5 {
          margin: 0;
          font-weight: 600;
          font-size: 20px;
          line-height: 17px;
          color: #212b36;
        }
      }

      @media (max-width: 1080px) {
        margin-top: 40px;
      }
    }
    .path {
      background: #13c296;
      box-shadow: -16.0895px 24.1342px 36.6483px rgba(19, 194, 150, 0.24);
      border-radius: 8.93861px;
      padding: 25px 20px;
      z-index: 10;
      left: -40px;
      top: 100px;
      position: absolute;
    }

    @media (max-width: 1080px) {
      margin-right: 80px;
    }
    @media (max-width: 980px) {
      margin-right: 0;
    }

    @media (max-width: 560px) {
      .path {
        left: -10px;
      }
      .monthWrap {
        margin: 270px 0 0 -120px;
        z-index: 10;
      }
    }
    @media (max-width: 420px) {
      .contentWithPicWrap {
        width: 300px;

        .picContentSubWrap {
          width: 90%;
        }
      }

      .monthWrap {
        padding: 20px 10px;
        margin: 270px 0 0 -100px;
      }
    }
  }
`;
