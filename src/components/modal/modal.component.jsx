import React from "react";
import styled from "styled-components";
import { AppContext } from "../../context";
import { useContext } from "react";

const ModalContainer = styled.div`
  height: 80vh;
  width: 80vw;
  background-color: #ff4150;
  position: absolute;
  top: 10vh;
  left: 10vw;
  z-index: 100;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 64px;
  box-sizing: border-box;
`;

const ContinueButton = styled.button`
  width: 300px;
  height: 50px;
`;

export default function Modal() {
  const { dispatch } = useContext(AppContext);
  return (
    <ModalContainer>
      <ContinueButton onClick={() => dispatch({ type: "TOGGLEMODAL" })}>
        {" "}
        Find a film
      </ContinueButton>
    </ModalContainer>
  );
}
