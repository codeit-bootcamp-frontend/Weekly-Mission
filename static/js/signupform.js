const form = document.querySelector('form');
const email = document.querySelector('input.email');
const password = document.querySelector('input.password');
const password2 = document.querySelector('input.password2');
const emailRegex = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

form.onsubmit = function(e) {
  e.preventDefault();
  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  }
  else if (!email.value.match(emailRegex)) {
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
    location.href = "/my-link";
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

email.addEventListener('focusout', isValidEmail);
password.addEventListener('focusout', isValidPassword);
password2.addEventListener('focusout', isValidPassword2);