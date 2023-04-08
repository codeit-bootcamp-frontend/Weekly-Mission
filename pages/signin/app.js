import { getElem } from "../../utils/getElement.js";
import { gettingStarted } from "../../utils/gettingStarted.js";

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
      gettingStarted();
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
      userInput.length == 0
        ? alert("이메일을 입력해주세요.")
        : emailRegex.test(userInput)
        ? (currentUser.email = userInput)
        : alert("올바른 이메일 주소가 아닙니다.");

      emailInput.style.color = "#3e3e43";
    });

    passwordInput.addEventListener("focusout", () => {
      passwordInput.style.color = "#3e3e43";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let flag = false;

      const users = JSON.parse(localStorage.getItem("users"));

      users.forEach((user) => {
        if (
          currentUser.email === user.email &&
          passwordInput.value === user.password
        ) {
          flag = true;
          return;
        }
      });

      flag
        ? (location.href = "/pages/my-link")
        : alert("이메일과 비밀번호를 확인해주세요.");
    });
  };

  init();
})();
