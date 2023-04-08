const email = document.querySelector("#signin-email");
const signinPassword = document.querySelector("#signin-password");
const signinBtn = document.querySelector(".submit-butoon");

function isValidEmail(e) {
  const emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

email.addEventListener("focusout", isValidEmail);
