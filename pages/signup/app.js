import { getElem, getElemAll } from "../../utils/getElement.js";
import { gettingStarted } from "../../utils/gettingStarted.js";

(function () {
  // states & elements
  let passwordWithEyeIconsFlag = false;

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const numRegex = /[0-9]/;
  const strRegex = /[a-zA-Z]/;

  const currentUser = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const form = getElem(document, ".form form");
  const emailInput = getElem(form, ".form .input-field input#email");
  const passwordInput = getElem(form, ".form .input-field input#password");
  const confirmPasswordInput = getElem(
    form,
    ".form .input-field input#confirm"
  );
  const eyeIcons = getElemAll(form, ".input-field .input i");

  // functions
  const passwordValidation = (userPassword, flag = false) => {
    if (
      !flag &&
      userPassword &&
      (!numRegex.test(userPassword) ||
        !strRegex.test(userPassword) ||
        userPassword.length < 8)
    )
      return false;
    else return true;
  };

  // load
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      gettingStarted();
    });

    // event handlers
    eyeIcons.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", (e) => {
        const target = e.target.previousSibling.previousSibling;
        passwordWithEyeIconsFlag = true;

        if (target.type === "password") {
          target.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
        } else {
          target.type = "password";
          eyeIcon.classList.replace("bx-show", "bx-hide");
        }
      });
    });

    emailInput.addEventListener("focusout", () => {
      const userInput = emailInput.value.trim();
      userInput.length == 0
        ? alert("이메일을 입력해주세요.")
        : emailRegex.test(userInput)
        ? (currentUser.email = userInput)
        : alert("올바른 이메일 주소가 아닙니다.");

      let flag = false;
      const users = JSON.parse(localStorage.getItem("users"));

      users?.forEach((user) => {
        if (userInput === user.email) {
          flag = true;
          return;
        }
      });

      if (flag) alert("이미 사용 중인 아이디입니다.");

      emailInput.style.color = "#3e3e43";
    });

    passwordInput.addEventListener("focusout", () => {
      const userPassword = passwordInput.value;

      let timer = setTimeout(() => {
        passwordValidation(userPassword, passwordWithEyeIconsFlag)
          ? (currentUser.password = userPassword)
          : alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");

        passwordInput.style.color = "#3e3e43";
        clearTimeout(timer);
      }, 500);
    });

    confirmPasswordInput.addEventListener("click", () => {
      passwordWithEyeIconsFlag = false;

      passwordValidation(passwordInput.value, passwordWithEyeIconsFlag)
        ? (currentUser.password = passwordInput.value)
        : alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");

      passwordWithEyeIconsFlag = true;
    });

    confirmPasswordInput.addEventListener("focusout", () => {
      currentUser.confirmPassword = confirmPasswordInput.value;
      confirmPasswordInput.style.color = "#3e3e43";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const errorMessage = [
        "이미 사용 중인 아이디입니다.",
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
        "비밀번호 확인이 올바르지 않습니다.",
      ];
      let errorIndex = -1;
      let flag = false;

      const users = JSON.parse(localStorage.getItem("users"));

      for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (flag) break;

        if (currentUser.email === user.email) {
          errorIndex = 0;
          flag = true;
        } else if (!passwordValidation(currentUser.password)) {
          errorIndex = 1;
          flag = true;
        } else if (currentUser.password !== currentUser.confirmPassword) {
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
              email: currentUser.email,
              password: currentUser.password,
            },
          ])
        );

        location.href = "/pages/my-link";
      } else {
        alert(errorMessage[errorIndex]);
      }
    });
  };

  init();
})();
