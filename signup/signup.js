const email = document.querySelector("#signup-email");
const password = document.querySelector("#signup-password");
const signupForm = document.querySelector("form");

function isValidEmail(e) {
  const emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (email.value === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  }
}

function isValidPassword(e) {
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  if (!password.value.match(passwordRegex)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
}

function isValidPasswordCheck(e) {
  const passwordCheck = document.getElementById("signup-password-check").value;
  if (password.value !== passwordCheck) {
    alert("비밀번호 확인이 일치하지 않습니다.");
  }
}

function isValidForm(e) {
  isValidEmail(e);
  isValidPassword(e);
  isValidPasswordCheck(e);
}
email.addEventListener("focusout", isValidEmail);
password.addEventListener("focusout", isValidPassword);
signupForm.addEventListener("submit", isValidForm);
