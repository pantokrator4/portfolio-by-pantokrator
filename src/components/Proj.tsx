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
            <FlexWrapper direction="column" align="center">
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
        font-size: 30px;
        margin-top: 40px;
        margin-bottom: 23px;
    }
    p {
        padding-bottom: 30px;
        max-width: 500px;
    }
    hr {
        margin: 0 0 40px 0;
        width: 300px;
        height: 4px;
        background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
        border-style: none;
        border-radius: 10px;
    }

    @media ${theme.media.mobile} {
        height: 470px;
        width: 385px;
        h3 {
            ${font({Fmax: 30, Fmin: 22, weight: 600})};
            //font-size: 24px;
            margin: 20px 0; 
        }
        hr {
            width: 210px;
            margin: 0 0 20px 0;
        }
        p {
            max-width: 350px;
        }
    }
`
const ImageProj = styled.img`
    width: 500px;
    height: 280px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        height: 196px;
        width: 330px;
        border-radius: 10px;
    }
`