import styled from "styled-components";

type infoPropsType = {
    infoText: string
    infoTel: string
}

export const Info = (props: infoPropsType) => {
    return(
        <InfoFooter>
            <h3>{props.infoText}</h3>
            <h3>{props.infoTel}</h3>
        </InfoFooter>
    )
}

const InfoFooter = styled.div`
    h3 {
        margin: 0 0 0 0;
        
    }
`