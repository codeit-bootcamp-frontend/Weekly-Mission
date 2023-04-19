import { getElem, getElemAll } from "../../hooks/getElement.js";
import getUsers from "../../utils/getUsers.js";
import { toggleButton } from "../../utils/toggleButton.js";
import { validationUserEmail } from "../../utils/validationUserEmail.js";
import { validationUserPassword } from "../../utils/validationUserPassword.js";
import { validationUsers } from "../../utils/validationUsers.js";

(function () {
  // states & elements
  let passwordWithEyeIconsFlag = false;

  const CURRENT_INPUT = {
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
      CURRENT_INPUT.email = validationUserEmail(
        emailInput.value.trim(),
        "signup"
      );
      emailInput.style.color = "#3e3e43";
    });

    passwordInput.addEventListener("focusout", () => {
      if (passwordWithEyeIconsFlag) return;

      const userPassword = passwordInput.value;

      let timer = setTimeout(() => {
        validationUserPassword(userPassword)
          ? (CURRENT_INPUT.password = userPassword)
          : alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");

        passwordInput.style.color = "#3e3e43";
        clearTimeout(timer);
      }, 500);
    });

    confirmPasswordInput.addEventListener("click", () => {
      const userPassword = passwordInput.value;

      validationUserPassword(userPassword)
        ? (CURRENT_INPUT.password = userPassword)
        : alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    });

    confirmPasswordInput.addEventListener("focusout", () => {
      CURRENT_INPUT.confirmPassword = confirmPasswordInput.value;
      confirmPasswordInput.style.color = "#3e3e43";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      validationUsers(
        "signup",
        CURRENT_INPUT.email,
        passwordInput.value,
        confirmPasswordInput.value
      );
    });
  };

  init();
})();
