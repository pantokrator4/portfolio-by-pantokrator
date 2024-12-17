import styled from "styled-components";
import { ProgressLine } from "../../components/ProgressLines";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Techno = () => {
    return (
        <StyledTechno>
            <TitleH2>Technologies</TitleH2>
            <FlexWrapper direction="column" align="center">
                <ProgressLine lineName = {"Html"} iconId={"indicatorHtml"} viewBox={"0 0 900 18"}  width={ "900" } height={ "18" }/>
                <ProgressLine lineName = {"Css, Sass"} iconId={"indicatorCss"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
                <ProgressLine lineName = {"React"} iconId={"indicatorReact"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
                <ProgressLine lineName = {"Styled components"} iconId={"indicatorCss"} viewBox = {"0 0 900 18"}  width= { "900" } height={ "18" }/>
            </FlexWrapper>
            <SkillsH2>Additional technologies and skills</SkillsH2>
            <FlexWrapper gap="50px" justify="center">
                <Icon iconId = {"gitSkillSq"} viewBox = {"0 0 100 100"}  width= { "100" } height={ "100" }/>
                <Icon iconId = {"gitSqSvg"} viewBox = {"0 0 100 100"}  width= { "100" } height={ "100" }/>
                <Icon iconId = {"figmaSq"} viewBox = {"0 0 100 100"}  width= { "100" } height={ "100" }/>
            </FlexWrapper>
        </StyledTechno>
    )
}

const StyledTechno = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 1065px;
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

{/* <ProgressLine lineName = {"Html"} progressValue={"80"}/>
<ProgressLine lineName = {"Css, Sass"} progressValue={"70"}/>
<ProgressLine lineName = {"React"} progressValue={"60"}/>
<ProgressLine lineName = {"Styled components"} progressValue={"70"}/> */}