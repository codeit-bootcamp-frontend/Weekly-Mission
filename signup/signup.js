const email = document.querySelector("#signup-email");
const password = document.querySelector("#signup-password");
const signupForm = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
let isAlertShown = false;

// validation 함수
function isValidEmail(e) {
  const emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (e.sourceCapabilities === null) {
    return;
  }

  if (email.value === "") {
    alert("이메일을 입력해주세요.");
    removeFocusOutEventListener(e);
    return false;
  } else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
    removeFocusOutEventListener(e);
    return false;
  } else if (email.value === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
    removeFocusOutEventListener(e);
    return false;
  }
  return true;
}

function isValidPassword(e) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  if (e.sourceCapabilities === null) {
    return;
  }

  if (!password.value.match(passwordRegex)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    removeFocusOutEventListener(e);
    return false;
  }
  return true;
}

function isValidPasswordCheck(e) {
  const passwordCheck = document.getElementById("signup-password-check").value;
  if (password.value !== passwordCheck) {
    alert("비밀번호 확인이 일치하지 않습니다.");
    return false;
  }
  return true;
}

function addFocusOutEventListener(e) {
  if (e.target === email) {
    e.target.addEventListener("focusout", isValidEmail);
  } else if (e.target === password) {
    e.target.addEventListener("focusout", isValidPassword);
  }
}

function removeFocusOutEventListener(e) {
  if (e.target === email) {
    e.target.removeEventListener("focusout", isValidEmail);
    e.preventDefault();
  } else if (e.target === password) {
    e.target.removeEventListener("focusout", isValidPassword);
    e.preventDefault();
  }
}

function isValidForm(e) {
  e.preventDefault();
  if (isValidEmail(e) && isValidPassword(e) && isValidPasswordCheck(e)) {
    location.href = "../my-link/";
  }
}


// validation에 대한 event listener 등록
inputs.forEach((input) => {

  input.addEventListener("focusin", addFocusOutEventListener);
});

signupForm.addEventListener("submit", isValidForm);

// eye toggle
const eyeIcons = document.querySelectorAll(".eye-icon");
const passwordEyeIcon = eyeIcons[0];
const passwordCheckEyeIcon = eyeIcons[0];

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    const target = e.target.previousSibling;

    if (eyeIcon.classList.contains("fa-eye-slash")) {
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
      target.type = "text";
    } else if (eyeIcon.classList.contains("fa-eye")) {
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
      target.type = "password";
    }
  });
});
