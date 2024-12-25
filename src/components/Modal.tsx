import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";
import { theme } from "../styles/Theme";
import styled from "styled-components";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalDiv>
      <ModalContentDiv>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContentDiv>
      <ModalOverlayDiv onClick={onClose}></ModalOverlayDiv>
    </ModalDiv>,
    document.body
  );
};

export default Modal;

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  background: ${theme.colors.secondaryBg};
  padding: 20px;
  border-radius: 50px 0 50px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1001;
  margin: 0 25px;
  `;

const ModalOverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
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
