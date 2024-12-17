import styled from "styled-components";
import { StepDiscription } from "../../components/StepDiscription";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Expirience = () => {
    return (
        <ExpDiv>
            <ExpTitleH2>Experience</ExpTitleH2>
            <FlexWrapper direction="column" align="center">
                <StyledList>
                <li>2019</li>
                <li>2021</li>
                <li>2023</li>
                <li>2024</li>
                </StyledList>
                <Icon iconId={'timeLine'} width={'889'} height={'25'} viewBox={'0 0 889 25'}/>
            </FlexWrapper>
            <FlexWrapper justify="center" gap="34px">
                <StepDiscription/>
                <StepDiscription/>
                <StepDiscription/>
                <StepDiscription/>
            </FlexWrapper>
        </ExpDiv>
    )
}

const ExpDiv = styled.section`
    min-height: 598px;
    display: flex;
    flex-direction: column;
`

const ExpTitleH2 = styled.h2`
    font-size: 46px;
    margin: 100px 0 70px 150px;
`

const StyledList = styled.ul`
    display: flex;
    gap: 230px;
    margin: 0 0 5px 0;
    li {
        font-size: 26px;
    }
`
