import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo as="a" href="#">
      <Icon iconId={"logoSvg"} viewBox={"0 0 18 15"} width="35" height="36" />
      PantoPort
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
  display: flex;
  font-size: 30px;
`;
