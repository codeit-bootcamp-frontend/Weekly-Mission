import { getElem, getElemAll } from "../../hooks/getElement.js";
import getUsers from "../../utils/getUsers.js";
import { toggleButton } from "../../utils/toggleButton.js";
import { validationUserEmail } from "../../utils/validationUserEmail.js";
import { validationUserPassword } from "../../utils/validationUserPassword.js";
import { validationUsers } from "../../utils/validationUsers.js";

(function () {
  // states & elements
  let passwordWithEyeIconsFlag = false;

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
        toggleButton(target, "password", "text", eyeIcon, "bx-hide", "bx-show");
      });
    });

    emailInput.addEventListener("focusout", () => {
      currentUser.email = validationUserEmail(
        emailInput.value.trim(),
        "signup"
      );
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
