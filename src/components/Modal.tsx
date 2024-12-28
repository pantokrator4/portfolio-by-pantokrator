import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { theme } from "../styles/Theme";
import styled from "styled-components";
import { ModalContentForm } from "./ModalContentForm";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => { 
  return ReactDOM.createPortal(
    <ModalDiv isOpen={isOpen}>
      <ModalContentDiv isOpen={isOpen}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContentForm onClose={onClose} />
        {children}
      </ModalContentDiv>
      <ModalOverlayDiv isOpen={isOpen} onClick={onClose}></ModalOverlayDiv>
    </ModalDiv>,
    document.body
  );
};

export default Modal;

const ModalDiv = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: .5s ease-in-out;
`;

const ModalContentDiv = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  background: ${theme.colors.secondaryBg};
  padding: 20px;
  border: 1px solid #2f4769;
  border-radius: 50px 0 50px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001;
  margin: 0 25px;
  transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: .5s ease-in-out;
`;

const ModalOverlayDiv = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: .5s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -2px;
  right: 5px;
  background: transparent;
  color: ${theme.colors.font};
  border: none;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    color: #2f4769;
  }
`;
