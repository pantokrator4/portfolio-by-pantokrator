import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg"
import { Button } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align="center" justify="space-around">
                <Text>
                    <h1>Lorem ipsum dolor amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button>Let’s Begin</Button>
                </Text>
                <div>
                    <Avatar src={avatar}/>
                </div>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 700px;
    
`

const Avatar = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover ;
    border: 10px solid;
    border-color: #00C0FD;
    border-radius: 50px 0 50px 0;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h1 {
        font-size: 54px;
        margin-bottom: 0px;
    }
    p {
        width: 482px;
        height: 81px;
        font-size: 18px;
    }
`

// const StyledMain = styled.section`
//     width: 100%;
//     height: 700px;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
// `