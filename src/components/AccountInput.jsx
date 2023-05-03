import styled from "styled-components";
import { EMAIL_TYPE, PASSWORD_TYPE } from "utils/constants";

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

function AccountInput({
  value,
  type = "text",
  showPassword,
  isConfirmPassword = false,
  handleBlur,
  handleChange,
  handlePasswordToggler,
}) {
  return (
    <>
      <Label htmlFor={isConfirmPassword ? `${value}-input2` : `${value}-input`}>
        {value === EMAIL_TYPE ? "이메일" : "비밀번호"}
        {isConfirmPassword && " 확인"}
      </Label>
      <InputContainer>
        <Input
          type={type}
          id={isConfirmPassword ? `${value}-input2` : `${value}-input`}
          name={isConfirmPassword ? value + "2" : value}
          placeholder={
            (value === EMAIL_TYPE ? "이메일을 입력해주세요." : "비밀번호") +
            (isConfirmPassword ? " 확인" : "")
          }
          autocomplete={value === EMAIL_TYPE ? EMAIL_TYPE : "current-password"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {value === PASSWORD_TYPE && (
          <Eye
            className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            onMouseDown={handlePasswordToggler}
          />
        )}
      </InputContainer>
    </>
  );
}

export default AccountInput;
