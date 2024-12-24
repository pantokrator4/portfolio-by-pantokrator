import styled from "styled-components";
import { FlexWrapper } from "./FlexWrapper";

type infoPropsType = {
  infoText: string;
  infoTel: string;
  hrefTel?: string;
  hrefEmail?: string;
};

export const InfoFooter = (props: infoPropsType) => {
  return (
    <FlexWrapper direction="column">
      <span>{props.infoText}</span>
      <a href={props.hrefTel || props.hrefEmail}>{props.infoTel}</a>
    </FlexWrapper>
  );
};
