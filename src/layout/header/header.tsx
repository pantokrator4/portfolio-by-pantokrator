import styled from "styled-components";
import { Logo } from "./logo";
import { TextNavig } from "./navigation";
import { LogoNavig } from "./logo-navig";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
    return (
    <StyledHeader>
        <FlexWrapper justify="space-around">
        <Logo />
        <TextNavig />
        <LogoNavig />
        </FlexWrapper>
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #0f1624;
    min-height: 100px;
`;

// const StyledHeader = styled.header`
//     background-color: #0F1624;
//     display: flex;
//     justify-content: space-around;
//     height: 100px;
// `
