const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const password = document.querySelector('input#password-input');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function signinSubmit(e) {
  e.preventDefault();
  if (emailInput.value === "test@codeit.com" && password.value === "codeit101") {
    location.replace("/my-link");
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

form.addEventListener('submit', signinSubmit)

function isValidEmail(e) {
  if (emailInput.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!emailRegex.test(emailInput.value)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

emailInput.addEventListener('focusout', isValidEmail);
