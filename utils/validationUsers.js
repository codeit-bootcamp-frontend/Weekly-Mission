import { validationUserPassword } from "./validationUserPassword.js";

export const validationUsers = (
  type,
  inputEmail,
  inputPassword,
  inputConfirmPassword = ""
) => {
  let flag = false;
  let errorIndex = -1;

  const errorMessages = {
    signin: ["이메일과 비밀번호를 확인해주세요."],
    signup: [
      "이미 사용 중인 아이디입니다.",
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
      "비밀번호 확인이 올바르지 않습니다.",
    ],
  };

  const users = JSON.parse(localStorage.getItem("users"));

  if (type === "signin") {
    const compare = { email: inputEmail, password: inputPassword };

    users.forEach((user) => {
      if (compare.email === user.email && compare.password === user.password) {
        flag = true;
        return;
      }
    });

    flag ? (location.href = "/pages/my-link") : alert(errorMessages[type][0]);
  } else if (type === "signup") {
    const compare = {
      email: inputEmail,
      password: inputPassword,
      confirmPassword: inputConfirmPassword,
    };

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (flag) break;

      if (compare.email === user.email) {
        errorIndex = 0;
        flag = true;
      } else if (!validationUserPassword(compare.password)) {
        errorIndex = 1;
        flag = true;
      } else if (compare.password !== compare.confirmPassword) {
        errorIndex = 2;
        flag = true;
      }
    }

    if (!flag) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          {
            email: compare.email,
            password: compare.password,
          },
        ])
      );

      location.href = "/pages/my-link";
    } else {
      alert(errorMessages[type][errorIndex]);
    }
  }
};
