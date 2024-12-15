import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo as = "a" href ="#">
            <Icon iconId = {"logoSvg"} viewBox = {"0 -2 10 30"}/>
            PantoPort
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    text-decoration: none;
    display: flex;
    margin-top: 30px;
    color: white;
    font-size: 30px;
`


