import styled from "styled-components";

export const IncreaseTrafficWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 50px 0 100px 0;
  position: relative;

  .bodyWrap {
    @media (max-width: 1080px) {
      justify-content: space-between;
      padding: 0 40px;
    }
    @media (max-width: 800px) {
      flex-direction: column-reverse;
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
      @media (max-width: 800px) {
        width: 100%;
      }
    }

    h6 {
      width: 468px;
      height: 44px;
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
      @media (max-width: 800px) {
        width: 100%;
      }
    }

    @media (max-width: 800px) {
      margin-top: 80px;
      width: 500px;
    }
    @media (max-width: 550px) {
      width: 80%;
    }
  }

  .picturesWrap {
    img {
      height: 100%;
      width: 100%;
    }
    .graph {
      z-index: 10;
      margin: -80px -150px 0 0;
      height: 240px;
      width: 240px;
    }
    .parentPic {
      height: 370px;
      width: 290px;
    }
    .dot {
      z-index: -1;
      margin: 0 0 -300px -100px;
      height: 150px;
      width: 150px;
    }
    .pathWrap {
      background: #13c296;
      box-shadow: -16.0895px 24.1342px 36.6483px rgba(19, 194, 150, 0.24);
      border-radius: 8.93861px;
      padding: 25px 20px;
      z-index: 10;
      margin: 0 -200px -350px 0;
    }

    @media (max-width: 1080px) {
      margin-right: 80px;
    }

    @media (max-width: 850px) {
      .graph {
        height: 220px;
        width: 220px;
      }
      .parentPic {
        height: 350px;
        width: 270px;
      }
      .dot {
        height: 130px;
        width: 130px;
      }
    }

    @media (max-width: 800px) {
      margin: 0 0 0 50px;
    }

    @media (max-width: 450px) {
      margin: 0 0 0 10%;
      .graph {
        height: 180px;
        width: 180px;
      }
      .parentPic {
        height: 310px;
        width: 230px;
      }
      .dot {
        height: 90px;
        width: 90px;
        margin: 0 0 -270px -60px;
      }
      .pathWrap {
        padding: 15px 10px;
        z-index: 10;
        margin: 0 -130px -300px 0;
      }
    }
  }
`;
