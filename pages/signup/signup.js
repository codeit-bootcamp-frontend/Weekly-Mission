const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const checkUserPassword = document.getElementById('user-check-password');
const submitForm = document.querySelector('form');
const passwordBox = document.querySelector('.container .password-box');
const form = document.querySelector('form');

let enteredEmail;
let enteredPassword;
let enteredChcekPassword;

let passValidationEmail = false;

// 이메일 규칙
const emailRegexp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

// 비밀번호 규칙
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 유효성 검사
function validation(e) {
  e.preventDefault();
  if (enteredEmail === 'test@codeit.com') {
    alert('이미 사용 중인 아이디입니다.');
  } else if (enteredPassword === enteredChcekPassword)
    location.href = '/my-link';
  else alert('비밀번호가 일치하지 않습니다.');
}

//input focus in and focue out register eventlistner
form.addEventListener('focusin', (event) => {
  const targetEl = event.target;
  targetEl.style.color = 'black';
  targetEl.style.border = '1px solid #6D6AFE';
});

form.addEventListener('focusout', (event) => {
  const targetEl = event.target;
  targetEl.style.color = 'gray';
  targetEl.style.border = '1px solid gray';
});

// 이메일 유효성 검사
function validateEmail() {
  enteredEmail = userEmail.value;
  if (enteredEmail === 'test@codeit.com') {
    alert('이미 사용 중인 아이디입니다.');
    return;
  } else if (!enteredEmail.length) {
    alert('이메일을 입력해주세요');
    return;
  } else if (!emailRegexp.test(enteredEmail)) {
    alert('올바른 이메일 주소가 아닙니다.');
    return;
  }
  passValidationEmail = true;
}

// 비밀번호 유효성 검사
function validatePassword() {
  enteredPassword = userPassword.value;
  if (
    passValidationEmail &&
    (!enteredPassword.length || !passwordRegexp.test(enteredPassword))
  )
    alert('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
}

function validateCheckPassword() {
  enteredChcekPassword = checkUserPassword.value;
  if (
    passValidationEmail &&
    (!enteredChcekPassword.length || !passwordRegexp.test(enteredChcekPassword))
  )
    alert('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
}

function toggleEye(event) {
  const targetEl = event.target;
  const type =
    targetEl.previousElementSibling.getAttribute('type') === 'password'
      ? 'text'
      : 'password';
  targetEl.previousElementSibling.setAttribute('type', type);
  targetEl.classList.toggle('bi-eye');
}

// eye icon toggle
passwordBox.addEventListener('click', toggleEye);

userEmail.addEventListener('focusout', validateEmail);
userPassword.addEventListener('focusout', validatePassword);
checkUserPassword.addEventListener('focusout', validateCheckPassword);

submitForm.addEventListener('submit', validation);
