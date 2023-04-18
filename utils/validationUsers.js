import { validationUserPassword } from "./validationUserPassword.js";

const ERROR_MESSAGES = {
  signin: ["이메일과 비밀번호를 확인해주세요."],
  signup: [
    "이미 사용 중인 아이디입니다.",
    "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    "비밀번호 확인이 올바르지 않습니다.",
  ],
};

export const validationUsers = (
  type,
  inputEmail,
  inputPassword,
  inputConfirmPassword = ""
) => {
  if (!inputEmail || !inputPassword) {
    return;
  }

  let flag = false;
  let errorIndex = -1;

  const USERS = JSON.parse(localStorage.getItem("users"));

  if (type === "signin") {
    const CURRENT_INPUT = { email: inputEmail, password: inputPassword };

    USERS.forEach((user) => {
      if (
        CURRENT_INPUT.email === user.email &&
        CURRENT_INPUT.password === user.password
      ) {
        flag = true;
        return;
      }
    });

    if (flag) {
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: CURRENT_INPUT.email,
          password: CURRENT_INPUT.password,
        })
      );

      location.href = "/pages/my-link";
    } else {
      alert(ERROR_MESSAGES[type][0]);
    }
  } else if (type === "signup") {
    const CURRENT_INPUT = {
      email: inputEmail,
      password: inputPassword,
      confirmPassword: inputConfirmPassword,
    };

    for (let i = 0; i < USERS.length; i++) {
      if (flag) break;

      if (CURRENT_INPUT.email === USERS[i].email) {
        errorIndex = 0;
        flag = true;
      } else if (!validationUserPassword(CURRENT_INPUT.password)) {
        errorIndex = 1;
        flag = true;
      } else if (CURRENT_INPUT.password !== CURRENT_INPUT.confirmPassword) {
        errorIndex = 2;
        flag = true;
      }
    }

    if (!flag) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...USERS,
          {
            email: CURRENT_INPUT.email,
            password: CURRENT_INPUT.password,
          },
        ])
      );

      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: CURRENT_INPUT.email,
          password: CURRENT_INPUT.password,
        })
      );

      location.href = "/pages/my-link";
    } else {
      alert(ERROR_MESSAGES[type][errorIndex]);
    }
  }
};
