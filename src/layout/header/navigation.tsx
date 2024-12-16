import styled from "styled-components";

export const TextNavig = () => {
    return (
        <StyledTextNavig>
            <ul>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">About me</a></li>
            </ul>
        </StyledTextNavig>
    )
}

const StyledTextNavig = styled.nav`
    ul {
        display: flex;
        gap: 80px;
        list-style-type: none;
        margin-top: 37px;
        padding-left: 0px;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }
`