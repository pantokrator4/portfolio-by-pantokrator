import styled from "styled-components";
import { Button } from "./Button";
import { theme } from "../styles/Theme";
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from "react";

export const ModalContentForm = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_yxomwra', 'template_bp0xuhf', form.current, {
        publicKey: 'YzKVRb6YA6hli78c2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <StyledModalContentForm>
      <span>Fill the form</span>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <Field placeholder={"Name"} type="text" required name={"user_name"}/>
        <Field placeholder={"Subject"} type="text" required name={"subject"}/>
        <Field placeholder={"Email"} type="email" required name={"email"}/>
        <Field placeholder={"Message"} as={"textarea"} name={"message"}/>
        <Button type={"submit"}>submit</Button>
      </StyledForm>
    </StyledModalContentForm>
  )
}

const StyledModalContentForm = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  span {
    font-size: 20px;
  }

  ${Button} {
    width: 100px;
    height: 30px;
    font-size: 15px;
    font-weight: 100;
    letter-spacing: 1px;
  }
`

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    resize: none;
    height: 100px;
  }
`

const Field = styled.input`
  background-color: ${theme.colors.primaryBg};
  border: 1px solid #2f4769;
  border-radius: 10px;
  color: ${theme.colors.font};
  padding: 7px 15px;
  font-family: "Poppins";
  font-weight: 500;
  
  &::placeholder {
    color: #2f4769;
  }

  &:focus-visible {
    outline: 3px solid #2f4769;
    border-radius: 10px;
  }
`