import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { FlexWrapper } from "./FlexWrapper";
type yearSpanPropsType = {
    yearSpan: string
    textP: string
}

export const StepDiscription = (props: yearSpanPropsType) => {
    return (
        <StyledStepDiscription>
            <FlexWrapper direction="column" align="center" gap="10px" position="relative">
                <span>{props.yearSpan}</span>
                <Icon iconId={"ellipse"} width={"100%"} height={"28"} viewBox={"0 0 25 30"}/>
                <p>{props.textP}</p>
            </FlexWrapper>
        </StyledStepDiscription>
    )
}

const StyledStepDiscription = styled.div`
    font-size: 26px;

`
// export const StepDiscription = () => {
//     return (
//         <ElementP>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor t ut labore et dolore magna aliqua.
//         </ElementP>
//     )
// }

// const ElementP = styled.p`
//     text-align: center;
// `