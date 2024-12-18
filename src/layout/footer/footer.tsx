import styled from "styled-components";
import { Info } from "../../components/infoFooter";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { LogoNavig } from "../../components/logo-navig";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between">
                    <FlexWrapper gap="163px" align="center">
                        <Info infoText={'Call me:'} infoTel={'123-456-789'}/>
                        <Info infoText={'Email:'} infoTel={'xxx@xyz.com'}/>
                    </FlexWrapper>
                    <LogoNavig/>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    min-height: 150px;
    background-color: #0F1624;
    font-size: 22px;
`