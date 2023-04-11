import { getElem } from "../../utils/getElement.js";
import getUsers from "../../utils/getUsers.js";
import { validationUserEmail } from "../../utils/validationUserEmail.js";
import { validationUsers } from "../../utils/validationUsers.js";

(function () {
  // state & elements
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const currentUser = {
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
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });

    emailInput.addEventListener("focusout", () => {
      const userInput = emailInput.value.trim();
      currentUser.email = validationUserEmail(userInput, "signin");
      emailInput.style.color = "#3e3e43";
    });

    passwordInput.addEventListener("focusout", () => {
      passwordInput.style.color = "#3e3e43";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      validationUsers("signin", currentUser.email, passwordInput.value);
    });
  };

  init();
})();
