import styled from "styled-components";

import banner from "./../../img/banner.png";

export const BannerContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
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

  div {
    display: flex;
    margin: 1em;
  }
  strong {
    font-size: 2em;
    color: #333;
    margin-left: 0.3em;
  }
  p {
    width: 70%;
    margin-bottom: 3em;
    max-width: 35em;
  }
`;

export const Display = styled.div`
  display: flex;
  max-width: 100%;
`;

export const BoxPalestra = styled.div`
  transform: translateY(-10%);
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
    transform: translateY(-20%);
  }
`;
