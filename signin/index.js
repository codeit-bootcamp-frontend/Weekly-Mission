const validEmail = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/;

const inputNodes = document.querySelectorAll("input");
const emailInput = inputNodes[0];
const passwordInput = inputNodes[1];

function checkEmailValid(e) {
  const emailValue = e.target.value;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
  } else if (!validEmail.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

emailInput.addEventListener("focusout", checkEmailValid);

const signinForm = document.querySelector(".signin-form");

function checkValidSignin(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    location.href = "/my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

signinForm.addEventListener("submit", checkValidSignin);

const eyeCloseIcon = document.querySelector(".eye-close");
const eyeOpenIcon = document.querySelector(".eye-open");

function toggleVisibility(e) {
  const passwordInput = e.target.parentElement.children[0];

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeCloseIcon.classList.add("eye-hidden");
    eyeOpenIcon.classList.add("eye-visible");
  } else {
    passwordInput.type = "password";
    eyeCloseIcon.classList.remove("eye-hidden");
    eyeOpenIcon.classList.remove("eye-visible");
  }

  passwordInput.focus();
}

eyeCloseIcon.addEventListener("click", toggleVisibility);
eyeOpenIcon.addEventListener("click", toggleVisibility);
