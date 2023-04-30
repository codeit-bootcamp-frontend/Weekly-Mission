import { Link } from "react-router-dom";
import styled from "styled-components";

const Label = styled.label`
  text-align: left;
  font-size: 1.4rem;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  margin: 1.2rem 0 2.4rem;
  border: 0.1rem solid var(--gray3);
  border-radius: 0.8rem;
  padding: 1.8rem 1.5rem;
  color: var(--gray2);

  &:focus {
    color: var(--gray1);
  }
`;

const Eye = styled.i`
  cursor: pointer;
  position: absolute;
  right: 0;
  margin: 3rem 1.5rem;
  color: var(--eye-toggler);
`;

function AccountInput({ value, passwordCheck }) {
  return (
    <>
      <Label htmlFor={`${value}-input`}>
        {value === "email" ? "이메일" : "비밀번호"}
        {passwordCheck === true && " 확인"}
      </Label>
      <InputContainer>
        <Input
          type={value}
          id={passwordCheck === true ? `${value}-input2` : `${value}-input`}
          name={passwordCheck === true ? value + "2" : value}
          placeholder={
            value === "email" ? "이메일을 입력해주세요." : "비밀번호"
          }
          autocomplete={value === "email" ? "email" : "current-password"}
        />
        <Eye className="fa fa-eye fa-eye-slash" />
      </InputContainer>
    </>
  );
}

export default AccountInput;
