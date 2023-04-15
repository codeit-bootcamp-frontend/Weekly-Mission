const signupForm = document.querySelector("form");
const signupEmail = document.querySelector("#email");
const signupPassword = document.querySelector("#password");
const signupPasswordRepeat = document.querySelector("#check-password");
const eyeIcons = document.querySelectorAll(".toggle-password");

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

function checkEmailExist(email) {
  if (email === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
    return false;
  }
  return true;
}

function checkPasswordFormat(password) {
  if (!passwordFormat.test(password)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    return false;
  }
  return true;
}

function checkPasswordRepeatSame(password, passwordRepeat) {
  if (password !== passwordRepeat) {
    alert("비밀번호가 동일하지 않습니다.");
    return false;
  }
  return true;
}

function checkEmail(e) {
  if (e.sourceCapabilities) {
    const email = signupEmail.value;
    checkEmailFormat(email);
    checkEmailExist(email);
  }
}

function checkPassword(e) {
  if (e.sourceCapabilities) {
    const password = signupPassword.value;
    checkPasswordFormat(password);
  }
}

function checkPasswordRepeat(e) {
  if (e.sourceCapabilities) {
    const password = signupPassword.value;
    const passwordRepeat = signupPasswordRepeat.value;
    checkPasswordRepeatSame(password, passwordRepeat);
  }
}

function checkSignup(e) {
  e.preventDefault();
  const email = signupEmail.value;
  const password = signupPassword.value;
  const passwordRepeat = signupPasswordRepeat.value;

  if (
    checkEmailFormat(email) &&
    checkEmailExist(email) &&
    checkPasswordFormat(password) &&
    checkPasswordRepeatSame(password, passwordRepeat)
  ) {
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
