const validEmail = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/;
const validPassword = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/;

const inputNodes = document.querySelectorAll("input");
const emailInput = inputNodes[0];
const passwordInput = inputNodes[1];
const passwordRemindInput = inputNodes[2];

function focusin(e) {
  if (e.target.id === "email") {
    setTimeout(() => {
      emailInput.addEventListener("focusout", checkEmailValid);
    }, 10);
  } else if (e.target.id === "password") {
    setTimeout(() => {
      passwordInput.addEventListener("focusout", checkPasswordValid);
    }, 10);
  }
}

function checkEmailValid(e) {
  const emailValue = e.target.value;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
  } else if (!validEmail.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (emailValue === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  }
  passwordInput.removeEventListener("focusout", checkPasswordValid);
}

function checkPasswordValid(e) {
  const passwordValue = e.target.value;

  if (!validPassword.test(passwordValue)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
  emailInput.removeEventListener("focusout", checkEmailValid);
}

inputNodes.forEach((inputNode) => {
  inputNode.addEventListener("focusin", focusin);
});

emailInput.addEventListener("focusout", checkEmailValid);
passwordInput.addEventListener("focusout", checkPasswordValid);

const signupForm = document.querySelector(".signup-form");

function checkValidSignup(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const passwordRemindValue = passwordRemindInput.value;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
  } else if (!validEmail.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (emailValue === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!validPassword.test(passwordValue)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else if (passwordValue !== passwordRemindValue) {
    alert("비밀번호 확인이 맞지 않습니다.");
  } else {
    location.href = "/my-link/";
  }

  passwordInput.removeEventListener("focusout", checkPasswordValid);
  emailInput.removeEventListener("focusout", checkEmailValid);
}

signupForm.addEventListener("submit", checkValidSignup);

const eyeIcons = document.querySelectorAll(".eye-icon");

const passwordEyeIcon = eyeIcons[0];
const passwordRemindEyeIcon = eyeIcons[1];

function togglePasswordVisibility(e) {
  const input = e.target.previousElementSibling;
  const eyeIcon = e.target;

  if (input.type === "password") {
    input.type = "text";
    eyeIcon.src = "/images/eye-open.svg";
  } else {
    input.type = "password";
    eyeIcon.src = "/images/eye-close.svg";
  }

  input.focus();
}

passwordEyeIcon.addEventListener("click", togglePasswordVisibility);
passwordRemindEyeIcon.addEventListener("click", togglePasswordVisibility);
