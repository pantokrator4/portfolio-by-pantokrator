import styled from "styled-components";
import { Icon } from "./icon/Icon";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

type lineNamePropsType = {
  lineName: string;
  lineWidth: string;
};

export const ProgressLine = (props: lineNamePropsType) => {
  return (
    <StyledProgressLineDiv>
      <h3>{props.lineName}</h3>
      <BackgroundLine>
        <InsideLine width={props.lineWidth} />
      </BackgroundLine>
      {/* <Icon iconId = {props.iconId} viewBox = {props.viewBox}  width= {props.width} height={props.height}/> */}
    </StyledProgressLineDiv>
  );
};

const StyledProgressLineDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
  h3 {
    margin: 0 0 5px 10px;
    display: flex;
    ${font({ Fmax: 24, Fmin: 16, weight: 600 })}
  }
`;

const BackgroundLine = styled.div`
  display: flex;
  height: 18px;
  background-color: #162950;
  border-radius: 10px;
`;

const InsideLine = styled.div<{ width: string }>`
  display: flex;
  height: 18px;
  justify-content: flex-start;
  background: linear-gradient${theme.colors.tripleGradient};
  width: ${(props) => props.width || "0%"};
  border-radius: 10px;
`;
