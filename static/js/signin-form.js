const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const password = document.querySelector('input#password-input');
const togglers = document.querySelectorAll('.input-container i');
const eye_container = document.querySelector('.eye-container');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.onsubmit = function(e) {
  e.preventDefault();
  if (emailInput.value === "test@codeit.com" && password.value === "codeit101") {
    location.replace("/my-link");
  }
  else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

function isValidEmail(e) {
  if (emailInput.value === "") {
    alert("이메일을 입력해주세요.");
  }
  else if (!emailRegex.test(emailInput.value)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

eye_container.addEventListener("mousedown", function(e){
  e.preventDefault();
})

togglers.forEach(element => {
  element.addEventListener("mousedown", function(e) {
    if (element.parentElement.previousElementSibling.type == 'password') {
      element.parentElement.previousElementSibling.setAttribute('type','text');
      element.classList.remove('fa-eye-slash');
    }
    else {
      element.parentElement.previousElementSibling.setAttribute('type','password');
      element.classList.add('fa-eye-slash');
    }
    e.preventDefault();
  })
});

emailInput.addEventListener('focusout', isValidEmail);
