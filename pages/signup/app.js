import { getElem, getElemAll } from "../../utils/getElement.js";
import getUsers from "../../utils/getUsers.js";
import { validationUserPassword } from "../../utils/validationUserPassword.js";
import { validationUsers } from "../../utils/validationUsers.js";

(function () {
  // states & elements
  let passwordWithEyeIconsFlag = false;

  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

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

  // load
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      getUsers();
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
        validationUserPassword(userPassword, passwordWithEyeIconsFlag)
          ? (currentUser.password = userPassword)
          : alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");

        passwordInput.style.color = "#3e3e43";
        clearTimeout(timer);
      }, 500);
    });

    confirmPasswordInput.addEventListener("click", () => {
      passwordWithEyeIconsFlag = false;

      validationUserPassword(passwordInput.value, passwordWithEyeIconsFlag)
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

      validationUsers(
        "signup",
        currentUser.email,
        currentUser.password,
        confirmPasswordInput.value
      );
    });
  };

  init();
})();
