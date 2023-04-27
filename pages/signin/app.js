import { getElem } from "../../hooks/getElement.js";
import getUsers from "../../utils/getUsers.js";
import { toggleButton } from "../../utils/toggleButton.js";
import { validationUserEmail } from "../../utils/validationUserEmail.js";
import { validationUsers } from "../../utils/validationUsers.js";

(function () {
  // state & elements
  const CURRENT_INPUT = {
    email: "",
    password: "",
  };

  const form = getElem(document, ".form form");
  const emailInput = getElem(form, ".form .input-field input#email");
  const passwordInput = getElem(form, ".form .input-field input#password");
  const eyeIcon = getElem(form, ".input-field.password > .input i");

  // load
  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      getUsers();
    });

    // event handlers
    eyeIcon.addEventListener("click", () => {
      toggleButton(
        passwordInput,
        "password",
        "text",
        eyeIcon,
        "bx-hide",
        "bx-show"
      );
    });

    emailInput.addEventListener("focusout", () => {
      CURRENT_INPUT.email = validationUserEmail(
        emailInput.value.trim(),
        "signin"
      );
      emailInput.style.color = "#3e3e43";
    });

    passwordInput.addEventListener("focusout", () => {
      passwordInput.style.color = "#3e3e43";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validationUsers("signin", CURRENT_INPUT.email, passwordInput.value);
    });
  };

  init();
})();
