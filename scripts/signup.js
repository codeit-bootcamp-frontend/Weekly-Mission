import Checker from "/scripts/Checker.js";

const signupForm = document.querySelector("form");
const signupEmail = document.querySelector("#email");
const signupPassword = document.querySelector("#password");
const signupPasswordRepeat = document.querySelector("#check-password");
const eyeIcons = document.querySelectorAll(".toggle-password");

function checkEmail(e) {
  if (e.sourceCapabilities) {
    const email = signupEmail.value;
    if (!email) {
      alert("이메일을 입력해주세요.");
    } else if (!Checker.checkEmailFormat(email)) {
      alert("올바른 이메일 주소가 아닙니다.");
    } else if (!Checker.checkEmailExist(email)) {
      alert("이미 사용 중인 아이디입니다.");
    }
  }
}

function checkPassword(e) {
  if (e.sourceCapabilities) {
    const password = signupPassword.value;
    if (!Checker.checkPasswordFormat(password)) {
      alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    }
  }
}

function checkPasswordRepeat(e) {
  if (e.sourceCapabilities) {
    const password = signupPassword.value;
    const passwordRepeat = signupPasswordRepeat.value;
    if (!Checker.checkPasswordRepeatSame(password, passwordRepeat)) {
      alert("비밀번호가 동일하지 않습니다.");
    }
  }
}

function checkSignup(e) {
  e.preventDefault();
  const email = signupEmail.value;
  const password = signupPassword.value;
  const passwordRepeat = signupPasswordRepeat.value;
  if (!email) {
    alert("이메일을 입력해주세요.");
  } else if (!Checker.checkEmailFormat(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (!Checker.checkEmailExist(email)) {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!Checker.checkPasswordFormat(password)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else if (!Checker.checkPasswordRepeatSame(password, passwordRepeat)) {
    alert("비밀번호가 동일하지 않습니다.");
  } else {
    location.href = "/my-link.html";
  }
}

function toggleVisibility(e) {
  e.preventDefault();
  const passwordInput = e.target.previousElementSibling;
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    this.setAttribute("src", "./images/eye-close.svg");
  } else {
    passwordInput.type = "text";
    this.setAttribute("src", "./images/eye-open.svg");
  }
}

signupEmail.addEventListener("focusout", checkEmail);
signupPassword.addEventListener("focusout", checkPassword);
signupPasswordRepeat.addEventListener("focusout", checkPasswordRepeat);
signupForm.addEventListener("submit", checkSignup);

for (let eyeIcon of eyeIcons) {
  eyeIcon.addEventListener("mousedown", toggleVisibility);
}
