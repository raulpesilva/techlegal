import styled from "styled-components";

import banner from "./../../img/banner.png";

export const BannerContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${banner});
  color: #fff;
  position: relative;
  align-items: center;
  h1 {
    margin-top: 0.5em;
  }

  strong {
    font-size: 2em;
    color: #fff;
    margin-left: 0.3em;
    font-weight: normal;
  }
  p {
    width: 70%;
    margin-bottom: 3em;
    max-width: 35em;
  }
`;
