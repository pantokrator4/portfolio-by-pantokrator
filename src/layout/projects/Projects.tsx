import styled from "styled-components";
import { Proj } from "../../components/Proj";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Projects = () => {
    return (
        <StyledProjects>
            <h2>Projects</h2>
            <FlexWrapper gap="42px" wrap="wrap" justify="center">
                <Proj projectName = {'PROJECT 1'}/>
                <Proj projectName = {'PROJECT 2'}/>
                <Proj projectName = {'PROJECT 3'}/>
                <Proj projectName = {'PROJECT 4'}/>
                <Proj projectName = {'PROJECT 5'}/>
                <Proj projectName = {'PROJECT 6'}/>
            </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    min-height: 1779px;
    display: flex;
    flex-direction: column;
    h2 {
    font-size: 46px;
    margin: 100px 0 70px 150px;
    }
`