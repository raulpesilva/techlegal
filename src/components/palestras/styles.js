import styled from "styled-components";

export const ContainerPalestras = styled.section`
  width: 95%;
  padding: 1em;
  min-height: 130px;
  background-color: #fff;
  /* margin-bottom: 1em; */
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  h1 {
    /* margin-top: 1em; */
    margin-left: 0.5em;
    text-transform: uppercase;
  }
`;

export const WrapPalestra = styled.div`
  /* margin-top: 1em; */
  margin-left: 0.5em;
  margin-right: 0.5em;
  display: flex;
  font-size: 1em;
  h2 {
    font-size: 1em;
    margin-left: 1em;
    color: #0099ff;
  }
  strong {
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
