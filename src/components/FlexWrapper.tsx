import styled from "styled-components";
import { theme } from "../styles/Theme"

type FlexWrapperPropsType = {
    direction?: string
    position?: string
    justify?: string
    zIndex?: string
    width?: string
    align?: string
    wrap?: string
    gap?: string
    top?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0"};
    position: ${props => props.position || "static"};
    top: ${props => props.top || "0"};
    z-index: ${props => props.zIndex || "0"};
    width: ${props => props.width || "auto"};
`

