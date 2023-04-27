import Checker from "/scripts/Checker.js";

const signinForm = document.querySelector("form");
const signinEmail = document.querySelector("#email");
const signinPassword = document.querySelector("#password");
const eyeIcon = document.querySelector(".toggle-password");

function checkEmail(e) {
  const email = signinEmail.value;
  if (!Checker.checkEmailFormat(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

function checkSignin(e) {
  e.preventDefault();
  const email = signinEmail.value;
  const password = signinPassword.value;
  if (!Checker.checkMemberAccount(email, password)) {
    alert("이메일과 비밀번호를 확인해주세요.");
  } else {
    location.replace("/my-link.html");
  }
}

function toggleVisibility(e) {
  e.preventDefault();
  if (signinPassword.type === "text") {
    signinPassword.type = "password";
    this.setAttribute("src", "./images/eye-close.svg");
  } else {
    signinPassword.type = "text";
    this.setAttribute("src", "./images/eye-open.svg");
  }
}

signinEmail.addEventListener("focusout", checkEmail);
signinForm.addEventListener("submit", checkSignin);
eyeIcon.addEventListener("mousedown", toggleVisibility);
