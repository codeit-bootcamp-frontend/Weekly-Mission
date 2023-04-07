const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const submitForm = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const togglePassword = document.querySelector('#togglePassword');

let enteredEmail = userEmail.value;
let enteredPassword = userPassword.value;

// 유효성 검사
function validation(e) {
  e.preventDefault();
  if (enteredEmail === 'text@codeit.com' && enteredPassword === 'codeit101') {
    location.href = '/my-link';
  } else {
    alert('이메일과 비밀번호를 확인해주세요.');
  }
}

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
function enterEmail() {
  if (!enteredEmail.includes('@')) alert('올바른 이메일 주소가 아닙니다.');
  else if (!enteredEmail.length) alert('이메일을 입력해주세요');
}

// input 최신값 반영
userEmail.addEventListener('change', (event) => {
  enteredEmail = event.target.value;
});

userPassword.addEventListener('change', (event) => {
  enteredEmail = event.target.value;
});

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
submitForm.addEventListener('submit', validation);
