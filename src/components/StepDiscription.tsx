import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { FlexWrapper } from "./FlexWrapper";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";
type yearSpanPropsType = {
    yearSpan: string
    textP: string
}

export const StepDiscription = (props: yearSpanPropsType) => {
    return (
        <StyledStepDiscription>
            <FlexWrapper direction="column" align="center" gap="10px" position="relative">
                <span>{props.yearSpan}</span>
                <Icon iconId={"ellipse"} width={"25"} height={"28"} viewBox={"0 0 25 30"}/>
                <p>{props.textP}</p>
            </FlexWrapper>
        </StyledStepDiscription>
    )
}

const StyledStepDiscription = styled.div`
    font-size: 26px;
    

    @media ${theme.media.mobile} {
        ${FlexWrapper} {
            flex-direction: row;
            gap: 20px;
        }

        span{
        width:50px;
        } 
    }
`