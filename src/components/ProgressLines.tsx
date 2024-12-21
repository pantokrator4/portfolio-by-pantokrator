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
        <BackgroundLine>
            <InsideLine/>
        </BackgroundLine>
        {/* <Icon iconId = {props.iconId} viewBox = {props.viewBox}  width= {props.width} height={props.height}/> */}
        </StyledProgressLineDiv>
    )
}

const StyledProgressLineDiv = styled.div`
    display: flex;
    flex-direction:column;
    max-width: 900px;
    width: 100%;
    h3 {
        margin-bottom: 5px;
        display: flex;
        ${font({Fmax: 24, Fmin: 16, weight: 600})}
    }
`

const BackgroundLine = styled.div`
    display: flex;
    height: 18px;
    background-color: #162950;
    border-radius: 10px;
`

const InsideLine = styled.div`
    display: flex;
    justify-content: flex-start;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    width: 50%;
    height: 18px;
    border-radius: 10px;
`


{/* <Icon iconId={"indicatorHtml"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
<Icon iconId={"indicatorCss"} viewBox = {"0 0 608 18"}  width= { "608" } height={ "18" }/>
<Icon iconId={"indicatorReact"} viewBox = {"0 0 495 18"}  width= { "495" } height={ "18" }/>
<Icon iconId={"indicatorCss"} viewBox = {"0 0 608 18"}  width= { "608" } height={ "18" }/> */}

{/* <ProgressLine lineName = {"Html"} progressValue={"80"}/>
<ProgressLine lineName = {"Css, Sass"} progressValue={"70"}/>
<ProgressLine lineName = {"React"} progressValue={"60"}/>
<ProgressLine lineName = {"Styled components"} progressValue={"70"}/> */}