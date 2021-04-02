import styled from "styled-components";

export const HeroSectionWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 160px 0 50px 0;
  position: relative;

  @media (max-width: 950px) {
    padding: 100px 0;
  }
  @media (max-width: 400px) {
    padding: 50px 0;
  }

  .imageWrap {
    margin: 0 -50px 0 0;

    @media (max-width: 1250px) {
      margin-top: -100px;
    }
    @media (max-width: 800px) {
      display: none;
    }

    img {
      height: auto;
      width: 100%;
      bottom: 100px;
      z-index: 10000;
      animation: blink 3s infinite ease 5s;
    }
  }
  .HeaderTextSection {
    h3 {
      width: 531px;
      height: 150px;
      font-weight: bold;
      font-size: 44px;
      line-height: 50px;
      color: #99efd0;
      margin-top: 50px;
      @media (max-width: 1200px) {
        width: 450px;
        font-size: 38px;
      }
    }

    h6 {
      width: 468px;
      height: 44px;
      font-size: 18px;
      line-height: 22px;
      color: #8476aa;
      letter-spacing: 0.2px;
      margin: 20px 0;

      @media (max-width: 1200px) {
        width: 400px;
      }
    }
    @media (min-width: 800px) {
      margin-left: 7%;
    }
    @media (max-width: 540px) {
      h3 {
        width: 400px;
        font-size: 30px;
      }
      h6 {
        font-size: 14px;
        line-height: 20px;
        margin-top: 2px;
      }
    }

    @media (max-width: 430px) {
      h3 {
        width: 320px;
      }
      h6 {
        font-size: 13px;
        width: 300px;
      }
      .buttonsWrap {
        width: 280px;
        button {
          padding: 0;
          width: 130px;
        }
      }
    }
    .videoSection {
      margin-top: 40px;
      .video {
        background: #361c5d;
        border-radius: 4px;
        width: 140px;
        height: 90px;
        border-radius: 4px;
        cursor: pointer;

        @media (max-width: 1000px) {
          background: #25043b;
        }
        @media (max-width: 400px) {
          width: 120px;
        }

        :hover {
          svg {
            font-size: 40px;
          }
        }
        svg {
          font-size: 48px;
          transition: all 0.3s ease;
          color: white;
        }
      }

      .vdeoText {
        margin-left: 20px;
        @media (max-width: 480px) {
          margin-left: 10px;
        }
        p {
          font-size: 16px;
          line-height: 22px;
          color: #8476aa;
          width: 340px;

          @media (max-width: 560px) {
            width: 280px;
          }
          @media (max-width: 480px) {
            width: 200px;
            font-size: 14px;
          }
          @media (max-width: 400px) {
            width: 180px;
          }
        }

        span {
          font-size: 14px;
          color: #6d6d78;
          cursor: pointer;
          margin-top: 10px;
          transition: all 0.3s ease;
          :hover {
            color: #bbb;
          }
        }
      }
    }
  }

  @keyframes blink {
    0%,
    35%,
    55%,
    100% {
      opacity: 0.5;
    }
    45%,
    65% {
      opacity: 1;
    }
  }
`;
