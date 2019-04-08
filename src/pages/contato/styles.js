import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #fff; */
`;
export const ButtonContato = styled.button`
  border: 1px solid #0099ff;
  border-radius: 5px;
  color: #0099ff;
  background-color: #fff;
  padding: 1em;
  margin-top: 1em;
  transition-duration: 0.2s;
  :hover {
    color: #fff;
    background-color: #0099ff;
    cursor: pointer;
  }
`;

export const ButtonContatoDisabled = styled.button`
  border: 1px solid #eee;
  border-radius: 5px;
  color: #eee;
  background-color: #fff;
  padding: 1em;
  margin-top: 1em;
  transition-duration: 0.2s;
  :hover {
    cursor: not-allowed;
  }
`;
