import styled from "styled-components";
import { InfoFooter } from "../../components/infoFooter";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { LogoNavig } from "../../components/logo-navig";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify="space-between">
          <FlexWrapper gap="160px" id="changeGap">
            <InfoFooter
              infoText={"Call me:"}
              infoTel={"123-456-789"}
              hrefTel={"tel:123456789"}
            />
            <InfoFooter
              infoText={"Email:"}
              infoTel={"xxx@xyz.com"}
              hrefEmail={"mailto:xxx@xyz.com"}
            />
          </FlexWrapper>
          <LogoNavig />
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  min-height: 150px;
  background-color: ${theme.colors.primaryBg};
  ${font({ Fmax: 22, Fmin: 14, weight: 400 })}

  ${FlexWrapper} {
  }

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      justify-content: center;
      #changeGap {
        gap: 80px;
      }
    }
  }
`;
