import styled from "styled-components";
import { Button } from "./Button";
import { theme } from "../styles/Theme";
import emailjs from '@emailjs/browser';
import { ChangeEvent, ElementRef, useRef, useState } from "react";
import { toast } from 'react-toastify';

type ModalContentFormProps = {
  onClose: () => void;
};



export const ModalContentForm = ({onClose}: ModalContentFormProps) => {
  const form = useRef<ElementRef<"form">>(null);
  const notify = () => toast.success("Form has been sent");
  
  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_yxomwra', 'template_bp0xuhf', form.current, {
        publicKey: 'YzKVRb6YA6hli78c2'
      })
      .then(
        () => {
          console.log('SUCCESS!');
          notify();
          onClose();
          onClickButtonHandler();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [inputFieldState1, setInputFieldState1] = useState("")
  const [inputFieldState2, setInputFieldState2] = useState("")
  const [inputFieldState3, setInputFieldState3] = useState("")
  const [inputFieldState4, setInputFieldState4] = useState("")

  const onChangeHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedInput = event.currentTarget.value
    setInputFieldState1(updatedInput)
  }

  const onChangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedInput = event.currentTarget.value
    setInputFieldState2(updatedInput)
    
  }

  const onChangeHandler3 = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedInput = event.currentTarget.value
    setInputFieldState3(updatedInput)
  }

  const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedTextAreaInput = event.currentTarget.value
    setInputFieldState4(updatedTextAreaInput)
  }

  const onClickButtonHandler = () => {
    setInputFieldState1("")
    setInputFieldState2("")
    setInputFieldState3("")
    setInputFieldState4("")
  }

  

  return (
    <StyledModalContentForm>
      <span>Fill the form</span>
      
      <StyledForm ref={form} onSubmit={sendEmail}>
        <Field value={inputFieldState1} onChange={onChangeHandler1} placeholder={"Name"} type="text" required name={"user_name"}/>
        <Field value={inputFieldState2} onChange={onChangeHandler2} placeholder={"Subject"} type="text" required name={"subject"}/>
        <Field value={inputFieldState3} onChange={onChangeHandler3} placeholder={"Email"} type="email" required name={"email"}/>
        <Field value={inputFieldState4} onChange={onChangeTextAreaHandler} placeholder={"Message"} as={"textarea"} name={"message"}/>
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
  font-size: 16px;
  
  &::placeholder {
    color: #2f4769;
  }

  &:focus-visible {
    outline: 3px solid #2f4769;
    border-radius: 10px;
  }
`