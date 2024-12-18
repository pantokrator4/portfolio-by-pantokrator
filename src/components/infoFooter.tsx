import styled from "styled-components";

type infoPropsType = {
    infoText: string
    infoTel: string
}

export const Info = (props: infoPropsType) => {
    return(
        <InfoFooter>
            <span>{props.infoText}</span>
            <span>{props.infoTel}</span>
        </InfoFooter>
    )
}

const InfoFooter = styled.div`
    input {
        margin: 0;
    }
    span {
        display: flex;
        flex-direction: column;
    }
`