import styled from "styled-components";
import { Proj } from "../../components/Proj";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <FlexWrapper direction="column" gap="70px">
                    <h2>Projects</h2>
                    <FlexWrapper gap="40px" wrap="wrap">
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
        font-size: 46px;
    }
`