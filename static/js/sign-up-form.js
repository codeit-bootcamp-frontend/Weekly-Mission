const form = document.querySelector('form');
const email = document.querySelector('input.email');
const password = document.querySelector('input.password');
const password2 = document.querySelector('input.password2');
const togglers = document.querySelectorAll('.password-input i');
const fo_preventor = document.querySelector('.prevent-focusout');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

form.onsubmit = function(e) {
  e.preventDefault();
  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  }
  else if (!emailRegex.match(email.value)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
  else if (email.value === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  }
  else if (!passwordRegex.test(password.value)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
  }
  else if (password.value !== password2.value) {
    alert("비밀번호가 일치하지 않습니다.");
  }
  else {
    location.replace("/my-link");
  }
}

function isValidEmail(e) {
  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  }
  else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
  else if (email.value === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  }
}

function isValidPassword(e) {
  if (!passwordRegex.test(password.value)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
  }
}

function isValidPassword2(e) {
  if (!passwordRegex.test(password2.value)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
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
password.addEventListener('focusout', isValidPassword);
password2.addEventListener('focusout', isValidPassword2);