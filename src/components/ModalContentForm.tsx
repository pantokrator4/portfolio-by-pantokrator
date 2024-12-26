import styled from "styled-components";
import { Button } from "./Button";
import { theme } from "../styles/Theme";

export const ModalContentForm = () => {
  return (
    <StyledModalContentForm>
      <span className="animate__animated animate__bounceIn">Fill the form</span>
      <StyledForm>
        <Field placeholder={"Name"} type="text" required/>
        <Field placeholder={"Email"} type="text" required/>
        <Field placeholder={"Message"} as={"textarea"} />
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