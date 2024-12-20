import styled from "styled-components";
import { ProgressLine } from "../../components/ProgressLines";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

export const Techno = () => {
    return (
        <StyledTechno id="technoSectionId">
            <Container>
                <FlexWrapper direction="column" gap="70px">
                    <h2>Technologies</h2>
                    <FlexWrapper direction="column" align="center">
                        <ProgressLine lineName = {"Html"} iconId={"indicatorHtml"} viewBox={"0 0 900 18"}  width={ "100%" } height={ "18" }/>
                        <ProgressLine lineName = {"Css, Sass"} iconId={"indicatorCss"} viewBox = {"0 0 900 18"}  width= { "100%" } height={ "18" }/>
                        <ProgressLine lineName = {"React"} iconId={"indicatorReact"} viewBox = {"0 0 900 18"}  width= { "100%" } height={ "18" }/>
                        <ProgressLine lineName = {"Styled components"} iconId={"indicatorCss"} viewBox = {"0 0 900 18"}  width= { "100%" } height={ "18" }/>
                    </FlexWrapper>
                    <StyledText>Additional technologies and skills</StyledText>
                    <FlexWrapper gap="50px" justify="center">
                        <Icon iconId = {"gitSkillSq"} viewBox = {"0 0 100 100"}  width= { "15%" } height={ "15%" }/>
                        <Icon iconId = {"gitSqSvg"} viewBox = {"0 0 100 100"}  width= { "15%" } height={ "15%" }/>
                        <Icon iconId = {"figmaSq"} viewBox = {"0 0 100 100"}  width= { "15%" } height={ "15%" }/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledTechno>
    )
}

const StyledTechno = styled.section`
    display: flex;
    align-items: center;

    min-height: 1065px;
    h2 {
        ${font({Fmax: 46, Fmin: 32, weight: 600})}
    }

    @media ${theme.media.mobile} {
        min-height: 880px;
    }
`
const StyledText = styled.h2`
    text-align: center;
`