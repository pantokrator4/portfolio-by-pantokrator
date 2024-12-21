import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const TextNavig = () => {
    return (
        <StyledTextNavig>
            <ul>
                <li><a href="#projectSectionId">Projects</a></li>
                <li><a href="#technoSectionId">Technologies</a></li>
                <li><a href="#expSectionId">Experience</a></li>
            </ul>
        </StyledTextNavig>
    )
}

const StyledTextNavig = styled.nav`
    display: flex;
    align-items: center;
    ul {
        display: flex;
        gap: 80px;

        li > a {
            &:hover {
                color: ${theme.colors.accentHover};
            }
        }
    }

    @media ${theme.media.tablet} {
        display: none;
    }
`