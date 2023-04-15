const form = document.querySelector('form');
const email = document.querySelector('input.email');
const password = document.querySelector('input.password');
const togglers = document.querySelectorAll('.password-input i');
const fo_preventor = document.querySelector('.prevent-focusout');
const emailRegex = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";

form.onsubmit = function(e) {
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.replace("/my-link");
  }
  else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

function isValidEmail(e) {
  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  }
  else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

fo_preventor.addEventListener("mousedown", function(e){
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

email.addEventListener('focusout', isValidEmail);
