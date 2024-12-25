import styled from "styled-components";
import { Proj } from "../../components/Proj";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";
import { Fade } from "react-awesome-reveal";

export const Projects = () => {
  return (
    <StyledProjects id="projectSectionId">
      <Container>
        <FlexWrapper direction="column">
          <h2>Projects</h2>
          <FlexWrapper gap="40px" wrap="wrap" justify="center">
            <Fade cascade={true}>
              <Proj projectName={"PROJECT 1"} />
              <Proj projectName={"PROJECT 2"} />
              <Proj projectName={"PROJECT 3"} />
              <Proj projectName={"PROJECT 4"} />
            </Fade>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  display: flex;
  min-height: 1780px;
  position: relative;

  ${FlexWrapper} {
    &:last-child {
      margin-bottom: 20px;
    }
  }

  h2 {
    ${font({ Fmax: 46, Fmin: 32, weight: 600 })};
    margin: 100px 0 70px 0;
  }

  @media ${theme.media.mobile} {
    h2 {
      margin: 70px 0 50px 0;
    }
  }
`;
