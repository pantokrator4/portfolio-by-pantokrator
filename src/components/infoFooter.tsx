import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";

type infoPropsType = {
    infoText: string
    infoTel: string
}

export const InfoFooter = (props: infoPropsType) => {
    return(
        <FlexWrapper direction="column">
            <span>{props.infoText}</span>
            <span>{props.infoTel}</span>
        </FlexWrapper>
    )
}