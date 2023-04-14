const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const togglePassword = document.querySelector('#togglePassword');

let enteredEmail;
let enteredPassword;

let passValidationEmail = false;

// 이메일 규칙
const emailRegexp =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

// 비밀번호 규칙
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

// 유효성 검사
function validation(event) {
  event.preventDefault();
  if (enteredEmail === 'test@codeit.com' && enteredPassword === 'codeit101') {
    window.location.href = '/signup';
  } else {
    alert('이메일과 비밀번호를 확인해주세요.');
  }
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
function enterEmail(event) {
  enteredEmail = userEmail.value;
  if (!enteredEmail.length) {
    alert('이메일을 입력해주세요');
    return;
  } else if (!emailRegexp.test(enteredEmail)) {
    alert('올바른 이메일 주소가 아닙니다.');
    return;
  }
  passValidationEmail = true;
}

// 비밀번호 유효성 검시
function enterPassword(event) {
  enteredPassword = userPassword.value;
  if (
    passValidationEmail &&
    (!passwordRegexp.test(enteredPassword) || !enteredPassword.length)
  ) {
    alert('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  }
}

// input eye 토글
togglePassword.addEventListener('click', function () {
  // toggle the type attribute
  const type =
    userPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  userPassword.setAttribute('type', type);

  // toggle the icon
  this.classList.toggle('bi-eye');
});

userEmail.addEventListener('focusout', enterEmail);
userPassword.addEventListener('focusout', enterPassword);
form.addEventListener('submit', validation);
