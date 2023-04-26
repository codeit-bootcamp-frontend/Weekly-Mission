const togglePasswordIcon = document.querySelector(".toggle-password");
const togglePasswordVerifyIcon = document.querySelector(".toggle-passwordverify");
const userEmailInput = document.querySelector(".user-email");
const userPasswordInput = document.querySelector(".user-password");
const userPasswordVerifyInput = document.querySelector(".user-passwordverify");
const signupForm = document.querySelector("#signin-up-form");
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

// 비밀번호를 확인할 수 있는 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
function togglePassword(e) {
  e.preventDefault();
  const icon = e.target;
  const input = icon.previousElementSibling;
  if (icon.classList.contains("fi-rr-eye")) {
    icon.classList.remove("fi-rr-eye");
    icon.classList.add("fi-rr-eye-crossed");
  } else {
    icon.classList.remove("fi-rr-eye-crossed");
    icon.classList.add("fi-rr-eye");
  }
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

/* 1.이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.
   2.이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다. 
   3.이메일 input에서 focus out 일 때, input 값이 test@codeit.com 일 경우, alert으로 “이미 사용 중인 아이디입니다.” 메세지를 보입니다.*/
function verifyEmail(e) {
  if (e.sourceCapabilities) {
    const email = e.target.value;
    if (!email) {
      alert("이메일을 입력해주세요.");
    } else if (email === "test@codeit.com") {
      alert("이미 사용 중인 아이디입니다.");
    } else if (!regexEmail.test(email)) {
      alert("올바른 이메일 주소가 아닙니다.");
    }
  }
}

// 비밀번호 input에서 focus out 일 때, 값이 없거나 문자열만 있거나 숫자만 있는 경우, alert으로 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 메세지를 보입니다.
function verifyPassword(e) {
  if (e.sourceCapabilities) {
    const password = e.target.value;
    if (!regexPassword.test(password)) {
      alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    }
  }
}

// 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 부분을 alert 메세지로 알립니다.
function verifysignupForm(e) {
  e.preventDefault();
  const email = userEmailInput.value;
  const password = userPasswordInput.value;
  const passwordVerify = userPasswordVerifyInput.value;
  if (!email) {
    alert("이메일을 입력해주세요.");
  } else if (email === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!regexEmail.test(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (!regexPassword.test(password)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else if (password !== passwordVerify) {
    alert("비밀번호 확인이 일치하지 않습니다.");
  } else {
    location.replace("../my-link.html");
  }
}

togglePasswordIcon.addEventListener("mousedown", togglePassword);
togglePasswordVerifyIcon.addEventListener("mousedown", togglePassword);
userEmailInput.addEventListener("focusout", verifyEmail);
userPasswordInput.addEventListener("focusout", verifyPassword);
signupForm.addEventListener("submit", verifysignupForm);
