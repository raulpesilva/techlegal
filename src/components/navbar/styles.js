import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 4em;
  background-color: #00ccff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 75px;
    height: 50px;
  }
  ul {
    display: flex;
    list-style: none;
    width: 30%;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
