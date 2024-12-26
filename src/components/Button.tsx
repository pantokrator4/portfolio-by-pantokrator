import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
  cursor: pointer;
  width: 240px;
  height: 60px;
  border-radius: 80px;
  border-style: none;
  background: linear-gradient${theme.colors.tripleGradient};
  font-size: 20px;
  font-weight: 600;
  color: ${theme.colors.font};
  transition: 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }

  @media ${theme.media.mobile} {
    width: 180px;
    height: 50px;
    font-size: 16px;
  }
`;
