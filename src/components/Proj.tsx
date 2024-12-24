import styled from "styled-components";
import { Button } from "./Button";
import googleImage from "../../src/assets/images/image1.png";
import { FlexWrapper } from "./FlexWrapper";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";
type projectNamePropsType = {
  projectName?: string;
};

export const Proj = (props: projectNamePropsType) => {
  return (
    <StyledProj>
      <FlexWrapper direction="column" align="center">
        <ImageProj src={googleImage} />
        <h3>{props.projectName || "Project Name"}</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button>Look It Up</Button>
      </FlexWrapper>
    </StyledProj>
  );
};

const StyledProj = styled.article`
  background-color: #0f1624;
  border-radius: 50px 0 50px 0;
  border: 1px solid;
  border-color: #a39d9d;
  height: 670px;
  width: 550px;
  padding: 25px 25px 40px 25px;
  //padding-top: 25px;

  h3 {
    margin: 40px 0 25px;
    ${font({ Fmax: 30, Fmin: 22, weight: 600 })};
  }

  p {
    margin: 40px 0 50px;
    max-width: 500px;
  }

  hr {
    width: 300px;
    height: 4px;
    background: linear-gradient(90deg, #13adc7, #6978d1, #945dd6);
    border-style: none;
    border-radius: 10px;
  }

  @media ${theme.media.mobile} {
    height: 500px;
    width: 385px;

    h3 {
      margin: 28px 0 18px;
    }

    hr {
      width: 210px;
    }
    p {
      max-width: 350px;
      margin: 28px 0 35px;
    }
  }
`;

const ImageProj = styled.img`
  box-sizing: border-box;
  //width: calc(100% - 20px);
  width: 100%;
  height: 100%;
  object-fit: cover;
  //padding: 0 15px;
`;
