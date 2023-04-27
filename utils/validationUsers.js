import {
  getItemLocalStorage,
  setItemLocalStorage,
  setItemSessiontorage,
} from "../hooks/browserStorage.js";
import { validationUserPassword } from "./validationUserPassword.js";

const ERROR_MESSAGES = {
  signin: ["이메일과 비밀번호를 확인해주세요."],
  signup: [
    "이미 사용 중인 아이디입니다.",
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    "비밀번호 확인이 올바르지 않습니다.",
  ],
};

const simpleValidationPassword = (comparePassword1, comparePassword2) => {
  if (comparePassword1 !== comparePassword2) return false;
  return true;
};
const simpleValidationEmail = (compareEmail1, compareEmail2) => {
  if (compareEmail1 !== compareEmail2) return false;
  return true;
};

const signupValidation = (
  simpleCheckEmail,
  checkValidationPassword,
  simpleCheckPassword
) => {
  let errorIndex = -1;
  let flag = false;

  if (simpleCheckEmail) {
    errorIndex = 0;
    flag = true;
  } else if (checkValidationPassword) {
    errorIndex = 1;
    flag = true;
  } else if (simpleCheckPassword) {
    errorIndex = 2;
    flag = true;
  }

  if (flag && errorIndex >= 0) return { errorIndex, flag };
  else return false;
};

const signinValidation = (simpleValidationEmail, simpleValidationPassword) => {
  if (simpleValidationEmail && simpleValidationPassword) return true;
  return false;
};

export const validationUsers = (
  type,
  inputEmail,
  inputPassword,
  inputConfirmPassword = ""
) => {
  if (!inputEmail || !inputPassword) return;

  let flag = false;
  let errorIndex = -1;

  const USERS = getItemLocalStorage("users", {});

  switch (type) {
    case "signin":
      {
        Object.keys(USERS).length &&
          USERS.forEach((user) => {
            if (signinValidation) {
              flag = true;
              return;
            }
          });

        if (flag) {
          setItemSessiontorage("currentUser", {
            email: inputEmail,
            password: inputPassword,
          });

          location.href = "/pages/my-link";
        } else {
          alert(ERROR_MESSAGES[type][0]);
        }
      }
      break;
    case "signup":
      {
        Object.keys(USERS).length &&
          USERS.forEach((user) => {
            if (flag) return;

            const check = signupValidation(
              simpleValidationEmail(inputEmail, user.email),
              !validationUserPassword(inputPassword),
              !simpleValidationPassword(inputPassword, inputConfirmPassword)
            );

            if (check) {
              errorIndex = check.errorIndex;
              flag = check.flag;
            }
          });

        if (!flag) {
          setItemLocalStorage("users", [
            ...USERS,
            {
              email: inputEmail,
              password: inputPassword,
            },
          ]);

          setItemSessiontorage("currentUser", {
            email: inputEmail,
            password: inputPassword,
          });

          location.href = "/pages/my-link";
        } else {
          alert(ERROR_MESSAGES[type][errorIndex]);
        }
      }
      break;
    default:
      return;
  }
};
