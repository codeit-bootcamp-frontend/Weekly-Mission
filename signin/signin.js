const email = document.querySelector("#signin-email");
const password = document.querySelector("#signin-password");
const signinForm = document.querySelector("form");

function isValidEmail(e) {
  const emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

function isValidAccount(e) {
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "../my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

email.addEventListener("focusout", isValidEmail);
signinForm.addEventListener("submit", isValidAccount);
