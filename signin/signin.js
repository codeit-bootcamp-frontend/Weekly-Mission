const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

function goUrl() {
  let link = '../my-link.html';
  location.href = link;
}

loginForm.onsubmit = function (e) {
  e.preventDefault();
  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    goUrl();
  } else {
    alert('이메일과 비밀번호를 확인해주세요');
  }
}

function emailVerify() {
  if (!emailInput.value) {
    alert('이메일을 입력해주세요!');
  } else if (!reg.test(emailInput.value)) {
      alert('올바른 이메일 주소가 아닙니다!');
  }
}

emailInput.addEventListener('focusout', emailVerify);