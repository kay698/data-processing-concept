import styled from "styled-components";

export const ManyReasonsWrap = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding: 50px 0 100px 0;
  position: relative;

  .bgimage{
    position: absolute;
    bottom: 0;
    z-index : -1;
  }

  .manyReasonsWrap {
    background: rgba(60, 62, 125, 0.19);
    border-radius: 5px;
    padding: 50px 0;
    width: 800px;

    @media (max-width: 850px) {
      width: max-content;
      padding: 50px;
    }

    h2 {
      font-weight: 500;
      font-size: 36px;
      line-height: 43px;
      text-align: center;
      color: #f2994a;

      @media (max-width: 450px) {
        font-size: 30px;
      }
    }
    span {
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #95a1bb;
      width: 360px;
      @media (max-width: 450px) {
        width: 300px;
      }
    }

    small {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #8476aa;
      margin: 20px;
      text-align: center;
    }

    .inputDiv {
      width: 400px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      height: 50px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 500px) {
        width: 310px;
      }

      & input {
        height: 100%;
        padding-left: 10px;
        background: transparent;
        border: none;
        outline: none;
        &::placeholder {
          color: white;
        }
      }

      button {
        span {
          color: white;
        }
      }
    }
  }
`;
