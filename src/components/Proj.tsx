import styled from "styled-components";
import { Button } from "./Button";
import googleImage from "../../src/assets/images/image1.png"
import { FlexWrapper } from "./FlexWrapper";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";
type projectNamePropsType = {
    projectName?: string
}

export const Proj = (props: projectNamePropsType) => {
    return (
        <StyledProj>
            <FlexWrapper direction="column" align="center" gap="30px">
                <ImageProj src={googleImage}/>
                <h3>{props.projectName || "Project Name"}</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button>Look It Up</Button>
            </FlexWrapper>
        </StyledProj>
    )
}

const StyledProj = styled.article`
    background-color: #0F1624;
    border-radius: 50px 0 50px 0;
    border: 1px solid;
    border-color: #A39D9D;
    height: 670px;
    width: 550px;
    padding-top: 25px;
    
    h3 {
        ${font({Fmax: 30, Fmin: 22, weight: 600})};
        }
    
        p {
        max-width: 500px;
        
    }
    hr {
        width: 300px;
        height: 4px;
        background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
        border-style: none;
        border-radius: 10px;
    }

    @media ${theme.media.mobile} {
        height: 500px;
        width: 385px;
        
        hr {
            width: 210px;
        }
        p {
            max-width: 350px;
        }
    }
`
const ImageProj = styled.img`
    box-sizing: border-box;
    width: calc(100% - 20px);
    height: 100%;
    object-fit: cover;
    padding: 0 15px;
`