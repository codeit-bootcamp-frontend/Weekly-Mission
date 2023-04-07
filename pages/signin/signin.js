const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const submitForm = document.querySelector('form');
let enteredEmail = userEmail.value;
let enteredPassword = userPassword.value;

function validation(e) {
  e.preventDefault();
  if (enteredEmail === 'text@codeit.com' && enteredPassword === 'codeit101') {
    location.href = '/my-link';
  } else {
    alert('이메일과 비밀번호를 확인해주세요.');
  }
}

function enterEmail() {
  if (!enteredEmail.includes('@') && enteredEmail.length)
    alert('올바른 이메일 주소가 아닙니다.');
  else if (!enteredEmail.length) alert('이메일을 입력해주세요');
}

userEmail.addEventListener('change', (event) => {
  enteredEmail = event.target.value;
});
userEmail.addEventListener('focusout', enterEmail);
submitForm.addEventListener('submit', validation);
