const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const password = document.querySelector('input#password-input');
const togglers = document.querySelectorAll('.input-container i');
const eyeContainer = document.querySelector('.eye-container');
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

eyeContainer.addEventListener("mousedown", function(e){
  e.preventDefault();
})

function passwordToggle(e) {
  if (e.target.parentElement.previousElementSibling.type == 'password') {
    e.target.parentElement.previousElementSibling.setAttribute('type','text');
    e.target.classList.remove('fa-eye-slash');
  } else {
    e.target.parentElement.previousElementSibling.setAttribute('type','password');
    e.target.classList.add('fa-eye-slash');
  }
  e.preventDefault();
}

togglers.forEach(element => element.addEventListener('mousedown', passwordToggle));
