const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const checkUserPassword = document.getElementById('user-check-password');
const togglePasswords = document.querySelectorAll('#togglePassword');
const submitForm = document.querySelector('form');
const passwordBox = document.querySelector('.container .password-box');
const form = document.querySelector('form');

let enteredEmail = userEmail.value;
let enteredPassword = userPassword.value;
let enteredChcekPassword = checkUserPassword.value;

// 이메일 규칙
const checkPasswordRegexp = /^[a-zA-Z0-9]/g;

// 로그인 완료
function validation(e) {
  e.preventDefault();
  if (enteredPassword === enteredChcekPassword) location.href = '/my-link';
  else alert('비밀번호가 일치하지 않습니다.');
}

// 이메일 유효성 검사
function validateEmail() {
  if (enteredEmail === 'text@codeit.com') {
    alert('이미 사용 중인 아이디입니다.');
  } else if (!enteredEmail.includes('@'))
    alert('올바른 이메일 주소가 아닙니다.');
  else if (!enteredEmail.length) alert('이메일을 입력해주세요');
}

// 비밀번호 유효성 검사
function validatePassword() {
  if (!enteredPassword.length || checkPasswordRegexp.test(enteredPassword))
    alert('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
}

// 최신값 반영
userEmail.addEventListener('change', (event) => {
  enteredEmail = event.target.value;
});

userPassword.addEventListener('change', (event) => {
  enteredPassword = event.target.value;
});

checkUserPassword.addEventListener('change', (event) => {
  enteredChcekPassword = event.target.value;
});

// inputs focus in
form.addEventListener('focusin', (event) => {
  const targetEl = event.target;
  targetEl.style.color = 'black';
  targetEl.style.border = '1px solid #6D6AFE';
});
// inputs focus out
form.addEventListener('focusout', (event) => {
  const targetEl = event.target;
  targetEl.style.color = 'gray';
  targetEl.style.border = '1px solid gray';
});

// eye icon toggle
passwordBox.addEventListener('click', (event) => {
  const targetEl = event.target;
  const type =
    targetEl.previousElementSibling.getAttribute('type') === 'password'
      ? 'text'
      : 'password';
  targetEl.previousElementSibling.setAttribute('type', type);

  targetEl.classList.toggle('bi-eye');
});

userEmail.addEventListener('focusout', validateEmail);
userPassword.addEventListener('focusout', validatePassword);
checkUserPassword.addEventListener('focusout', validatePassword);

submitForm.addEventListener('submit', validation);
