import styled from "styled-components";
import { theme } from "../../../styles/Theme"
import { css } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { useState } from "react";

export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) }
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </BurgerButton>
            <MobilePopUp isOpen={menuIsOpen} onClick={ ()=> {setmenuIsOpen(false)} }>
                <ul>
                    <li><a href="#projectSectionId">Projects</a></li>
                    <li><a href="#technoSectionId">Technologies</a></li>
                    <li><a href="#expSectionId">Experience</a></li>
                </ul>
                <ul style={{flexDirection:"row"}}>
                    <li><a href="#"><Icon iconId={ "gitSvg" } width= { "50" } height={ "50" }/></a></li>
                    <li><a href="#"><Icon iconId={ "linkedSvg" } width= { "50" } height={ "50" }/></a></li>
                    <li><a href="#"><Icon iconId={ "telegramSvg" } width= { "45" } height={ "45" } viewBox={"0 -2 35 30"}/></a></li>
                </ul>
            </MobilePopUp>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobilePopUp = styled.div<{isOpen: boolean}>`
    position: fixed;
    flex-direction: column;
    gap: 50px;
    height: 100%;
    display: none;
    background-color: hsla(220, 41%, 10%, 0.9);
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    z-index: 999;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
    li {
        font-size: 40px;
        }
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0);
    border-style: none;

    span {
        display: block;
        width: 36px;
        height: 4px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 4px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-135deg) translateY(0);
                
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 4px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
            width: 36px;
            `}
        }
    }
`