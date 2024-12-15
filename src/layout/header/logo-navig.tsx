import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const LogoNavig = () => {
    return (
        <StyledLogoNavig>
            <nav>
                <ul>
                    <li><a href=""><Icon iconId={ "gitSvg" } width= { "32" } height={ "32" }/></a></li>
                    <li><a href=""><Icon iconId={ "linkedSvg" } width= { "32" } height={ "32" }/></a></li>
                    <li><a href=""><Icon iconId={ "telegramSvg" } width= { "28" } height={ "28" } viewBox={"0 -2 35 30"}/></a></li>
                </ul>
            </nav>
        </StyledLogoNavig>
    )
}

const StyledLogoNavig = styled.nav`
    ul {
        display: flex;
        gap: 25px;
        list-style-type: none;
        margin-top: 34px;
        margin-bottom: 34px;
        padding-left: 0px;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }
`