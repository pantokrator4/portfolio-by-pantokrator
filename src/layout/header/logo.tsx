import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const Logo = () => {
    return (
        <StyledLogo>
            <a href="">
                <Icon iconId = {"logoSvg"} viewBox = {"0 -2 10 30"}/>
                <h2>PantoPort</h2>
            </a>
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    a {
        text-decoration: none;
        display: flex;
        margin-top: 30px;
        
    }
    h2 {
        color: white;
        margin: 0px;
    }
`


