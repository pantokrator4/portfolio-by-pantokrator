import styled from "styled-components";
import { StepDiscription } from "../../components/StepDiscription";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

export const Expirience = () => {
    return (
        <ExpDiv>
            <Container>
                <FlexWrapper direction="column" gap="70px">
                    <h2>Experience</h2>
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
                </FlexWrapper>
            </Container>
        </ExpDiv>
    )
}

const ExpDiv = styled.section`
    min-height: 598px;
    display: flex;
    align-items: center;
    
    h2 {
        font-size: 46px;
    }
`
const StyledList = styled.ul`
    display: flex;
    gap: 230px;
    margin: 0 0 5px 0;
    li {
        font-size: 26px;
    }
`
