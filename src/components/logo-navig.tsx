import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { theme } from "../styles/Theme";

export const LogoNavig = () => {
    return (
        <StyledLogoNavig>
            <ul>
                <li><a href="#"><Icon iconId={ "gitSvg" } width= { "32" } height={ "32" }/></a></li>
                <li><a href="#"><Icon iconId={ "linkedSvg" } width= { "32" } height={ "32" }/></a></li>
                <li><a href="#"><Icon iconId={ "telegramSvg" } width= { "28" } height={ "28" } viewBox={"0 -2 35 30"}/></a></li>
            </ul>
        </StyledLogoNavig>
    )
}

const StyledLogoNavig = styled.nav`
    display: flex;
    align-items: center;
    ul {
        display: flex;
        gap: 25px;

        li > a {
            display: flex;
            &:hover{
                color: ${theme.colors.accentHover};
                transform: translateY(-3px);
            }
        }
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`