import styled from "styled-components";
import { Proj } from "../../components/Proj";

export const Projects = () => {
    return (
        <StyledProjects>
            <h2>Projects</h2>
            <StyledProjectContainer>
                <Proj projectName = {'PROJECT 1'}/>
                <Proj projectName = {'PROJECT 2'}/>
                <Proj projectName = {'PROJECT 3'}/>
                <Proj projectName = {'PROJECT 4'}/>
                <Proj projectName = {'PROJECT 5'}/>
                <Proj projectName = {'PROJECT 6'}/>
            </StyledProjectContainer>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
min-height: 1779px;
background-color: #161D2A;
display: flex;
flex-direction: column;
h2 {
    color: white;
    font-size: 46px;
    margin: 100px 0 70px 150px;
}
`

const StyledProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 42px;
    padding-left: 150px;
`

//отрегулировать StyledProjectContainer