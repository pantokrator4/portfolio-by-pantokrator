import styled from "styled-components";
import { Button } from "./Button";
import googleImage from "../../src/assets/images/image1.png"
type projectNamePropsType = {
    projectName?: string
}

export const Proj = (props: projectNamePropsType) => {
    return (
        <StyledProj>
            <ImageProj src={googleImage}/>
            <h3>{props.projectName || "Project Name"}</h3>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button>Look It Up</Button>
        </StyledProj>
    )
}

//отрегулировать StyledProj
const StyledProj = styled.article`
    display: flex;
    flex-direction: column;
    background-color: #0F1624;
    border-radius: 50px 0 50px 0;
    border: 1px solid;
    border-color: #A39D9D;
    height: 670px;
    width: 550px;
    color: white;
    align-items: center;
    padding-top: 25px;
    h3 {
        font-size: 30px;
        margin-top: 40px;
        margin-bottom: 23px;
    }
    p {
        font-size: 20px;
        padding-bottom: 50px;
        width: 500px;
        margin: 0;
    }
    hr {
        margin: 0 0 40px 0;
        width: 300px;
        height: 4px;
        background: linear-gradient(90deg, #13ADC7, #6978D1, #945DD6);
        border-style: none;
        border-radius: 10px;
    }
    
`

const ImageProj = styled.img`
    width: 500px;
    height: 280px;
    object-fit: cover;
    
`

