const email = document.querySelector("#signin-email");
const password = document.querySelector("#signin-password");
const signinForm = document.querySelector("form");
const inputs = document.querySelectorAll(".input");

function isValidEmail(e) {
  const emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

function isValidAccount(e) {
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "../my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

// inputbox focus text color 변경
function focusInTextColor(e) {
  e.target.classList.add("input-focus-text-color");
}

function focusOutTextColor(e) {
  e.target.classList.remove("input-focus-text-color");
}

inputs.forEach((input) => {
  input.addEventListener("focusin", focusInTextColor);
  input.addEventListener("focusout", focusOutTextColor);
});

// eys toggle
const eyeIcons = document.querySelector(".eye-icon");

eyeIcons.addEventListener("pointerdown", (e) => {
  const target = e.target.previousSibling;
  e.preventDefault();
  if (eyeIcons.classList.contains("fa-eye-slash")) {
    eyeIcons.classList.remove("fa-eye-slash");
    eyeIcons.classList.add("fa-eye");
    target.type = "text";
  } else if (eyeIcons.classList.contains("fa-eye")) {
    eyeIcons.classList.remove("fa-eye");
    eyeIcons.classList.add("fa-eye-slash");
    target.type = "password";
  }
});

// validation에 대한 event listener 등록
email.addEventListener("focusout", isValidEmail);
signinForm.addEventListener("submit", isValidAccount);
