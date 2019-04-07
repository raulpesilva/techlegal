import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 4em;
  background-color: #0099ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 75px;
    height: 50px;
    margin-left: 1em;
  }
  ul {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-around;
    a {
      font-weight: bold;
      text-decoration: none;
      color: #fff;
    }
  }
  @media (min-width: 700px) {
    justify-content: center;
    ul {
      width: 30%;
    }
    img {
      margin-right: 4em;
    }
  }
`;
