import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { font } from "../styles/Common";

type lineNamePropsType = {
    lineName: string
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    
}

export const ProgressLine = (props: lineNamePropsType) => {
    return (
        <StyledProgressLineDiv >
        <h3>{props.lineName}</h3>
        <Icon iconId = {props.iconId} viewBox = {props.viewBox}  width= {props.width} height={props.height}/>
        </StyledProgressLineDiv>
    )
}

const StyledProgressLineDiv = styled.div`
    
    h3 {
        margin-bottom: 5px;
        display: flex;
        ${font({Fmax: 24, Fmin: 16, weight: 600})}
    }
`


{/* <Icon iconId={"indicatorHtml"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
<Icon iconId={"indicatorCss"} viewBox = {"0 0 608 18"}  width= { "608" } height={ "18" }/>
<Icon iconId={"indicatorReact"} viewBox = {"0 0 495 18"}  width= { "495" } height={ "18" }/>
<Icon iconId={"indicatorCss"} viewBox = {"0 0 608 18"}  width= { "608" } height={ "18" }/> */}

{/* <ProgressLine lineName = {"Html"} progressValue={"80"}/>
<ProgressLine lineName = {"Css, Sass"} progressValue={"70"}/>
<ProgressLine lineName = {"React"} progressValue={"60"}/>
<ProgressLine lineName = {"Styled components"} progressValue={"70"}/> */}