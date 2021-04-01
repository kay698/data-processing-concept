import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  height: 100px;
  z-index: 1000000;
  position: fixed;
  /* background-color: white; */
  right: 0;

  .desktopMenu {
    @media (max-width: 700px) {
      display: none;
    }
  }

  .listWrap {
    .logoWrap {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    ul {
      @media (max-width: 830px) {
        padding: 0 0 0 10px;
      }
    }

    li {
      margin: 0 15px;

      @media (max-width: 830px) {
        margin: 0 7px;
      }
      a {
        font-size: 12px;
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


  @media (max-width: 700px) {
    height: max-content;
  }
`;
