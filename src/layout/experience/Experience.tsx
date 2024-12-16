import styled from "styled-components";
import { StepDiscription } from "../../components/StepDiscription";
import { Icon } from "../../components/icon/Icon";

export const Expirience = () => {
    return (
        <ExpDiv>
            <ExpTitleH2>Experience</ExpTitleH2>
            <MyProgressBar>
                <ul>
                <li>2019</li>
                <li>2021</li>
                <li>2023</li>
                <li>2024</li>
                </ul>
                <Icon iconId={'timeLine'} width={'889'} height={'25'} viewBox={'0 0 889 25'}/>
            </MyProgressBar>
            <StepDiscriptionDiv>
                <StepDiscription/>
                <StepDiscription/>
                <StepDiscription/>
                <StepDiscription/>
            </StepDiscriptionDiv>
        </ExpDiv>
    )
}

//<svg width="889" height="25" viewBox="0 0 889 25" fill="none" xmlns="http://www.w3.org/2000/svg">
const ExpDiv = styled.section`
    height: 598px;
    background-color: #161D2A;
    color: white;
    display: flex;
    flex-direction: column;
`

const ExpTitleH2 = styled.h2`
    font-size: 46px;
    margin: 100px 0 70px 150px;
`


const MyProgressBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
        list-style-type: none;
        display: flex;
        gap: 230px;
        padding: 0;
        margin: 0 0 5px 0;
    }
    li {
        font-size: 26px;
    }
`

const StepDiscriptionDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 34px;
    margin-top: 20px;
`
