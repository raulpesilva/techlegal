import styled from "styled-components";

export const BoxCard = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
  margin-bottom: 80px;
  min-width: 33.33%;
  width: 100%;
  position: relative;
`;
export const BoxCardModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
  margin-bottom: 80px;
  z-index: 50;
  position: absolute;
  width: 100%;

  @media (min-width: 875px) {
    min-width: 100%;
  }
`;

export const ContentPalestrante = styled.div`
  display: flex;
  justify-content: center;
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
  padding-bottom: 40px;
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
  padding-right: 1em;
  margin-bottom: 40px;
`;

export const Modal = styled.div`
  position: fixed;
  background-color: #000;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 1;
  /* display: flex; */
`;

export const Curriculo = styled.div`
  /* font-size: 1.3em; */
  margin-bottom: 40px;
`;
export const ModalButton = styled.button`
  border-radius: 50px;
  font-size: 1.3em;
  border: 1px solid #0099ff;
  color: #0099ff;
  background-color: #fff;
  min-width: 2em;
  min-height: 2em;
  bottom: 0;
  position: absolute;
  transform: translateY(30%);
  transition-duration: 0.2s;
  font-weight: bold;

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
