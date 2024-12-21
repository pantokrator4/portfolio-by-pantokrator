import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    cursor: pointer;
    width: 240px;
    height: 60px;
    border-radius: 80px;
    border-style: none;
    background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
    font-size: 20px;
    font-weight: 600;
    color: ${theme.colors.font};
    &:hover {
        background: linear-gradient(90deg, #13acc789, #6979d186, #935dd684);
        
    }

    @media ${theme.media.mobile} {
        width: 180px;
        height: 50px;
        font-size: 16px;
        }
`