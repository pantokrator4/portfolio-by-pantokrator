import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg"
import { Button } from "../../components/Button";


export const Main = () => {
    return (
        <StyledMain>
            <TextCont>
                <h2>Lorem ipsum dolor amet</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button>Let’s Begin</Button>
            </TextCont>
            <div>
                <Avatar src={avatar}/>
            </div>
            
        </StyledMain>
    )
}

const StyledMain = styled.div`
    width: 100%;
    height: 700px;
    background-color: #0F1624;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
`

const Avatar = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover ;
    border: 10px solid;
    border-color: #00C0FD;
    border-radius: 50px 0 50px 0;
`

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2 {
        color: white;
        font-size: 54px;
        margin-bottom: 0px;
    }
    p {
        width: 482px;
        height: 81px;
        color: white;
        font-size: 18px;
    }
`