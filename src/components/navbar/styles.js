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
    flex: 1;
    justify-content: space-around;
    a {
      font-weight: bold;
      text-decoration: none;
      color: #fff;
    }
  }
`;
