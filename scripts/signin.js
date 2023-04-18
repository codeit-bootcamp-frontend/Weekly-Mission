const signinForm = document.querySelector("form");
const signinEmail = document.querySelector("#email");
const signinPassword = document.querySelector("#password");
const eyeIcon = document.querySelector(".toggle-password");

const emailFormat = /^[\w\-\.\/]+\@[\w\-]+\.[\w]+$/;
const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function checkEmailFormat(email) {
  if (!email) {
    alert("이메일을 입력해주세요.");
    return false;
  } else if (!emailFormat.test(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
    return false;
  }
  return true;
}

function checkMemberAccount(email, password) {
  return email === "test@codeit.com" && password === "codeit101";
}

function checkEmail(e) {
  const email = signinEmail.value;
  checkEmailFormat(email);
}

function checkSignin(e) {
  e.preventDefault();
  const email = signinEmail.value;
  const password = signinPassword.value;

  if (checkMemberAccount(email, password)) {
    location.replace("/my-link.html");
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
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
