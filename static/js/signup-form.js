const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const passwordInput2 = document.querySelector('#password2-input');
const togglers = document.querySelectorAll('.input-container i');
const eyeContainer = document.querySelector('.eye-container');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function signupSubmit(e) {
  e.preventDefault();
  if (emailInput.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!emailRegex.test(emailInput.value)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (emailInput.value === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  } else if (!passwordRegex.test(passwordInput.value)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
  } else if (!passwordRegex.test(passwordInput2.value)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
  } else if (passwordInput.value !== passwordInput2.value) {
    alert("비밀번호가 일치하지 않습니다.");
  } else {
    location.replace("/my-link");
  }
}

form.addEventListener('submit', signupSubmit)

function isValidEmail(e) {
  if (emailInput.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!emailRegex.test(emailInput.value)) {
    alert("올바른 이메일 주소가 아닙니다.");
  } else if (emailInput.value === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
  }
}

emailInput.addEventListener('focusout', isValidEmail);

function isValidPassword(e) {
  if (!passwordRegex.test(e.target.value)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상을 입력해 주세요.");
  }
}

passwordInput.addEventListener('focusout', isValidPassword);
passwordInput2.addEventListener('focusout', isValidPassword);

eyeContainer.addEventListener("mousedown", function(e){
  e.preventDefault();
})

togglers.forEach(element => {
  element.addEventListener("mousedown", function(e) {
    if (element.parentElement.previousElementSibling.type == 'password') {
      element.parentElement.previousElementSibling.setAttribute('type','text');
      element.classList.remove('fa-eye-slash');
    } else {
      element.parentElement.previousElementSibling.setAttribute('type','password');
      element.classList.add('fa-eye-slash');
    }
    e.preventDefault();
  })
});
