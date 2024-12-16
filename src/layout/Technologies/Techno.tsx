import styled from "styled-components";
import { ProgressLine } from "../../components/ProgressLines";
import { Icon } from "../../components/icon/Icon";

export const Techno = () => {
    return (
        <StyledTechno>
            <TitleH2>Technologies</TitleH2>
            <ProgLinesDiv>
                <ProgressLine lineName = {"Html"} iconId={"indicatorHtml"} viewBox={"0 0 900 18"}  width={ "900" } height={ "18" }/>
                <ProgressLine lineName = {"Css, Sass"} iconId={"indicatorCss"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
                <ProgressLine lineName = {"React"} iconId={"indicatorReact"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
                <ProgressLine lineName = {"Styled components"} iconId={"indicatorCss"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
            </ProgLinesDiv>
            <SkillsH2>Additional technologies and skills</SkillsH2>
            <IconsDiv>
                <Icon iconId = {"gitSkillSq"} viewBox = {"0 0 100 100"}  width= { "100" } height={ "100" }/>
                <Icon iconId = {"gitSqSvg"} viewBox = {"0 0 100 100"}  width= { "100" } height={ "100" }/>
                <Icon iconId = {"figmaSq"} viewBox = {"0 0 100 100"}  width= { "100" } height={ "100" }/>
            </IconsDiv>
        </StyledTechno>
    )
}

const StyledTechno = styled.section`
    background-color: #0F1624;
    color: white;
    display: flex;
    flex-direction: column;
    height: 1065px;
`
const TitleH2 = styled.h2`
    font-size: 46px;
    margin: 100px 0 70px 150px;
`
const SkillsH2 = styled.h2`
    font-size: 46px;
    margin: 120px 0 70px 0;
    text-align: center;
`

const ProgLinesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const IconsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
`

{/* <ProgressLine lineName = {"Html"} progressValue={"80"}/>
<ProgressLine lineName = {"Css, Sass"} progressValue={"70"}/>
<ProgressLine lineName = {"React"} progressValue={"60"}/>
<ProgressLine lineName = {"Styled components"} progressValue={"70"}/> */}