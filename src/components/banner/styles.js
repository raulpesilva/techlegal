import styled from "styled-components";

import banner from "./../../img/banner.png";

export const BannerContainer = styled.div`
  width: 100%;
  div {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    background-image: url(${banner});
    color: #fff;
    position: relative;
    strong {
      font-size: 2em;
      color: #333;
    }
  }
`;
