import { getElem, getElemAll } from "../../hooks/getElement.js";
import getUsers from "../../utils/getUsers.js";
import { toggleButton } from "../../utils/toggleButton.js";
import { validationUserEmail } from "../../utils/validationUserEmail.js";
import { validationUserPassword } from "../../utils/validationUserPassword.js";
import { validationUsers } from "../../utils/validationUsers.js";

(function () {
  // states & elements
  let passwordWithEyeIconsFlag = false;
  let alreadyEmailValidation = false;
  let alreadyPasswordValidation = false;

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

    emailInput.addEventListener("focusin", () => {
      alreadyEmailValidation = false;
    });

    emailInput.addEventListener("focusout", () => {
      if (alreadyEmailValidation) return;

      CURRENT_INPUT.email = validationUserEmail(
        emailInput.value.trim(),
        "signup"
      );
      emailInput.style.color = "#3e3e43";
    });

    passwordInput.addEventListener("focusin", () => {
      alreadyPasswordValidation = false;
    });

    passwordInput.addEventListener("focusout", () => {
      if (passwordWithEyeIconsFlag) return;
      if (alreadyPasswordValidation) return;

      const userPassword = passwordInput.value;

      let timer = setTimeout(() => {
        if (validationUserPassword(userPassword)) {
          CURRENT_INPUT.password = userPassword;
        } else {
          alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
          alreadyPasswordValidation = true;
        }

        passwordInput.style.color = "#3e3e43";
        clearTimeout(timer);
      }, 500);

      alreadyEmailValidation = true;
      alreadyPasswordValidation = true;
    });

    confirmPasswordInput.addEventListener("click", () => {
      const userPassword = passwordInput.value;

      validationUserPassword(userPassword)
        ? (CURRENT_INPUT.password = userPassword)
        : alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");

      alreadyEmailValidation = true;
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
