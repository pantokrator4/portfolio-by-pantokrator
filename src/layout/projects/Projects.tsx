import styled from "styled-components";
import { Proj } from "../../components/Proj";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";


export const Projects = () => {
    return (
        <StyledProjects id="projectSectionId">
            <Container>
                <FlexWrapper direction="column" gap="70px">
                    <h2>Projects</h2>
                    <FlexWrapper gap="40px" wrap="wrap" justify="center">
                        <Proj projectName = {'PROJECT 1'}/>
                        <Proj projectName = {'PROJECT 2'}/>
                        <Proj projectName = {'PROJECT 3'}/>
                        <Proj projectName = {'PROJECT 4'}/>
                        {/* <Proj projectName = {'PROJECT 5'}/> */}
                        {/* <Proj projectName = {'PROJECT 6'}/> */}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    display: flex;
    align-items: center;
    min-height: 1780px;
    
    h2 {
        ${font({Fmax: 46, Fmin: 32, weight: 600})};
    }


    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            &:last-child {
                margin-bottom: 20px;
            }
        }

        h2 {
            margin-top: 50px;
        }
    }
`