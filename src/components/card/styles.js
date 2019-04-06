import styled from "styled-components";

export const BoxCard = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 80px;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 50px;
  position: relative;
`;

export const Foto = styled.img`
  width: 93px;
  height: 93px;
  border: 1px solid #0099ff;
  top: 0;
  transform: translateY(-50%);
  position: absolute;
  border-radius: 50px;
  object-fit: cover;
`;

export const Nome = styled.h1`
  font-size: 1.3em;
`;

export const Palestra = styled.h2`
  font-size: 1.3em;
  color: #0099ff;
`;

export const Conteudo = styled.p`
  font-size: 1.3em;
`;
export const Modal = styled.button`
  border-radius: 50px;
  font-size: 1.3em;
  border: 1px solid #0099ff;
  color: #0099ff;
  background-color: #fff;
  min-width: 2em;
  min-height: 2em;
  transform: translateY(30%);
  transition-duration: 0.2s;
  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: #0099ff;
  }
`;
export const Wrap = styled.div`
  width: 90%;
  margin-left: 2em;
`;
