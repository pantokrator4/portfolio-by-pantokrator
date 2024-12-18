import styled from "styled-components";
import { Logo } from "./logo";
import { TextNavig } from "./navigation";
import { LogoNavig } from "../../components/logo-navig";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

export const Header = () => {
    return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify="space-between">
                <Logo />
                <TextNavig />
                <LogoNavig />
            </FlexWrapper>
        </Container>
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    opacity: 90%;
    background-color: #0f1624;
    min-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`;