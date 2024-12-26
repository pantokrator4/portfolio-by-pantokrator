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
        <FlexWrapper direction="column">
          <TitleText className="animate__animated animate__bounceInLeft">Technologies</TitleText>
          <FlexWrapper direction="column" align="center" gap="25px">
            <ProgressLine lineName={"Html"} lineWidth={"60%"} />
            <ProgressLine lineName={"Css, Sass"} lineWidth={"45%"} />
            <ProgressLine lineName={"React"} lineWidth={"25%"} />
            <ProgressLine lineName={"Styled components"} lineWidth={"15%"} />
          </FlexWrapper>
          <StyledText>Additional technologies and skills</StyledText>
          <FlexWrapper gap="50px" justify="center">
            <Icon iconId={"gitSkillSq"} viewBox={"0 0 100 100"} />
            <Icon iconId={"gitSqSvg"} viewBox={"0 0 100 100"} />
            <Icon iconId={"figmaSq"} viewBox={"0 0 100 100"} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledTechno>
  );
};

const StyledTechno = styled.section`
  display: flex;
  min-height: 1000px;

  svg {
    //max-width: 100px;
    //max-height: 100px;
    width: 10%;
    height: 10%;
  }

  @media ${theme.media.tablet} {
    min-height: 800px;
  }

  @media ${theme.media.mobile} {
    min-height: 700px;
  }
`;
const TitleText = styled.h2`
  margin: 100px 0 70px 0;
  ${font({ Fmax: 46, Fmin: 32, weight: 600 })};

  @media ${theme.media.mobile} {
    margin: 70px 0 50px;
  }
`;

const StyledText = styled.h2`
  text-align: center;
  margin: 120px 0 70px 0;
  ${font({ Fmax: 46, Fmin: 24, weight: 600 })};

  @media ${theme.media.mobile} {
    margin: 70px 0 50px;
  }
`;
