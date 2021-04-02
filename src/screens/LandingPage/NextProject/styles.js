import styled from "styled-components";

export const NextProjectWrap = styled.div`
  width: 100%;
  height: max-content;
  padding: 50px 0
  position: relative;

  h3 {
    margin: 20px 0;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.33px;
    color: #99efd0;
    width: 650px;

    span {
      color: #f2994a;
    }

    @media (max-width: 720px) {
      width: 90%;
      font-size: 30px;
    }
  }

  img {
    width: 80%;
    height: auto;
    z-index: -1;
    margin-top: -100px;

    @media (max-width: 900px) {
      width: 100%;
    }
    @media (max-width: 820px) {
      margin-top: -30px;
    }
  }
`;
