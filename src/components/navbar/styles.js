import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 4em;
  background-color: #0099ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    position: absolute;
    background-color: #55efc4;
    color: #333;
    border-radius: 5px;
    font-size: 1.2em;
    padding: 0.8em;
    margin-top: 4em;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    z-index: 50;
  }
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
    height: 100%;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 1.1em;
      transition-duration: 0.2s;
      &:hover {
        color: #333;
        opacity: 0.8;
      }
    }
    li {
      display: flex;
      align-items: center;
      padding: 1em;
    }
  }
  @media (min-width: 700px) {
    justify-content: center;
    ul {
      width: 40%;
      font-size: 1.2em;
    }
    img {
      margin-right: 4em;
    }
  }
`;
