import styled from "styled-components";
import { Info } from "../../components/infoFooter";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <InfoDiv>
                <Info infoText={'Call me:'} infoTel={'123-456-789'}/>
                <Info infoText={'Email:'} infoTel={'xxx@xyz.com'}/>
            </InfoDiv>
            <IconsDiv>
                <ul>
                    <li><a href=""><Icon iconId={ "gitSvg" } width= { "35" } height={ "35" } viewBox={"0 0 35 35"}/></a></li>
                    <li><a href=""><Icon iconId={ "linkedSvg" } width= { "35" } height={ "35" } viewBox={"0 0 35 35"}/></a></li>
                    <li><a href=""><Icon iconId={ "telegramSvg" } width= { "28" } height={ "28" } viewBox={"0 -2 35 30"}/></a></li>
                </ul>
            </IconsDiv>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    height: 150px;
    background-color: #0F1624;
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: space-around;
`
const InfoDiv = styled.div`
    display: flex;
    gap: 163px;
    align-items: center;
`
const IconsDiv = styled.div`
    ul {
        display: flex;
        gap: 25px;
        list-style-type: none;
        margin: 58px 0 0 0;
        padding: 0;
    }
`