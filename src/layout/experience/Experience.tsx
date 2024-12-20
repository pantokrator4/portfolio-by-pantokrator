import styled from "styled-components";
import { StepDiscription } from "../../components/StepDiscription";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme"

export const Expirience = () => {
    return (
        <ExpDiv id="expSectionId">
            <Container>
                <FlexWrapper direction="column" gap="70px">
                    <h2>Experience</h2>
                    <div style={{position:"relative"}}>
                    <FlexWrapper id="iconContainer"  justify="center" position="absolute" top="56px" width="100%">
                        <Icon iconId={'newTimeLine'} width={'78%'} height={'25px'} viewBox={'0 0 880 25'}/>
                    </FlexWrapper>
                    <FlexWrapper justify="center" gap="35px" id="wrapContent" grow="1">
                        <StepDiscription yearSpan ={"2019"} textP = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua."}/>
                        <StepDiscription yearSpan ={"2021"} textP = {"Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin"}/>
                        <StepDiscription yearSpan ={"2022"} textP = {"Lorem ipsum dolor met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  et dolore magna aliqua."}/>
                        <StepDiscription yearSpan ={"2024"} textP = {"Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                    </FlexWrapper>
                    </div>
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
        ${font({Fmax: 46, Fmin: 32, weight: 600})}
    }

    @media ${theme.media.mobile} {
        #wrapContent{
            flex-direction:column;
        }
        #iconContainer {
            display: none;
            /* transform: rotate(-90deg);
            left: -100px;
            top: 170px; */
        }
    }
`