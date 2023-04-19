const emailRegExp = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/;
const passwordRegExp = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{8,}$/;

const inputs = document.querySelectorAll("input");
const emailInput = inputs[0];
const passwordInput = inputs[1];
const passwordRemindInput = inputs[2];

/* alert 무한 루프를 해결하기 위해 setTimeout 함수로 focusout 이벤트 핸들러 등록 지연 */
function addFocusoutHandler(e) {
  if (e.target.id === "email") {
    setTimeout(() => {
      emailInput.addEventListener("focusout", verifyEmail);
    }, 10);
  } else if (e.target.id === "password") {
    setTimeout(() => {
      passwordInput.addEventListener("focusout", verifyPassword);
    }, 10);
  }
}

function verifyEmail(e) {
  const emailValue = e.target.value;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
  } else if (!emailRegExp.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (emailValue === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  }
  /* 무한 루프를 해결하기 위해 다른쪽 input 태그의 focusout 핸들러 삭제 */
  passwordInput.removeEventListener("focusout", verifyPassword);
}

function verifyPassword(e) {
  const passwordValue = e.target.value;

  if (!passwordRegExp.test(passwordValue)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  }
  /* 무한 루프를 해결하기 위해 다른쪽 input 태그의 focusout 핸들러 삭제 */
  emailInput.removeEventListener("focusout", verifyEmail);
}

inputs.forEach((input) => {
  input.addEventListener("focusin", addFocusoutHandler);
});

emailInput.addEventListener("focusout", verifyEmail);
passwordInput.addEventListener("focusout", verifyPassword);

const signupForm = document.querySelector(".signup-form");

function verifyAccount(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  const passwordRemindValue = passwordRemindInput.value;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
  } else if (!emailRegExp.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (emailValue === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!passwordRegExp.test(passwordValue)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
  } else if (passwordValue !== passwordRemindValue) {
    alert("비밀번호 확인이 맞지 않습니다.");
  } else {
    location.href = "/my-link/";
  }

  passwordInput.removeEventListener("focusout", verifyPassword);
  emailInput.removeEventListener("focusout", verifyEmail);
}

signupForm.addEventListener("submit", verifyAccount);

const eyeIcons = document.querySelectorAll(".eye-icon");

const passwordEyeIcon = eyeIcons[0];
const passwordRemindEyeIcon = eyeIcons[1];

function togglePasswordVisibility(e) {
  const passwordInput = e.target.previousElementSibling;
  const eyeIcon = e.target;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "/images/eye-open.svg";
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "/images/eye-close.svg";
  }

  passwordInput.focus();
}

passwordEyeIcon.addEventListener("click", togglePasswordVisibility);
passwordRemindEyeIcon.addEventListener("click", togglePasswordVisibility);
