import styled from "styled-components";
import avatar from "../../assets/images/avatar.jpg";
import { Button } from "../../components/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import Modal from "../../components/Modal";
import { ModalContentForm } from '../../components/ModalContentForm'
import Tilt from 'react-parallax-tilt';
import { ToastContainer, toast } from 'react-toastify';

export const Main = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between" gap="30px">
          <Text>
            <h1>Lorem ipsum dolor amet</h1>
            <AnimatedText style={{textAlign: "left"}}>
            <Typewriter
                options={{
                  strings: [
                    "Lorem ipsum dolor sit amet",
                    "consectetur adipiscing elit",
                    "sed do eiusmod tempor incidid",
                    "ut labore et dolore magna",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 35,
                }}
              />
              </AnimatedText>
            <p id="staticText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button onClick={() => setIsOpen(true)}>Contact Me</Button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            </Modal>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Text>
          <Tilt>
            <AvatarWrapper>
              <Avatar src={avatar} />
            </AvatarWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 700px;
  display: flex;
  align-items: center;
  ${Button} {
    position: relative;
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }

    ${Button} {
      margin-bottom: 20px;
    }
  }
`;

const AvatarWrapper = styled.div`
  max-width: 400px;
  height: 400px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 50px 0 50px 0;
  margin: 0 5px;

  @media ${theme.media.mobile} {
    max-width: 300px;
    height: 300px;
    margin-top: 130px;
  }

  &::after {
    content: "";
    position: absolute;
    height: 105%;
    width: 105%;
    border-radius: 60px 0 60px 0;
    background: linear-gradient${theme.colors.tripleGradient};
    z-index: 0;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px 0 50px 0;
  z-index: 1;
`;

const AnimatedText = styled.p`
  
  margin: "10px 0 0 0";
  background: linear-gradient${theme.colors.tripleGradient};
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    ${font({ Fmax: 50, Fmin: 36, weight: 600 })};
    text-align: left;
    //font-size: 54px;
  }
  #staticText {
    max-width: 480px;
    text-align: left;
    margin: 15px 0 60px 0;
  }
  `;
