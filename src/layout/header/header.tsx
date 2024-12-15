import styled from "styled-components";
import { Logo } from "./logo";
import { TextNavig } from "./navigation";
import { LogoNavig } from "./logo-navig";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <TextNavig/>
            <LogoNavig/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #0F1624;
    display: flex;
    justify-content: space-around;
    height: 100px;
`
