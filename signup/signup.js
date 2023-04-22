const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password-check');
const btns = document.querySelectorAll('.btn');

const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
const regPassword = /^(?=.*[a-zA-z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function goUrl() {
  let link = '../my-link.html';
  location.href = link;
}

loginForm.onsubmit = function (e) {
  e.preventDefault();
  if (!emailInput.value) {
    alert('이메일을 입력해주세요');
    // continue;
  } else if (emailInput.value === 'test@codeit.com') {
    alert('이미 사용중인 아이디 입니다');
    // continue;
  } else if (!regEmail.test(emailInput.value)) {
    alert('올바른 이메일 주소가 아닙니다');
    // continue;
  } else if (!passwordInput.value) {
    alert('비밀번호는 영문 숫자 조합 8자리 이상을 입력해 주세요');
    // continue
  } else if (!regPassword.test(passwordInput.value)) {
    alert('비밀번호는 영문 숫자 조합 8자리 이상을 입력해 주세요');
    // continue;
  } else if (passwordInput.value !== passwordCheckInput.value) {
    alert('비밀번호가 일치하지 않습니다');
 } else {
    goUrl();
  }
}

function emailVerify() {
  if (!emailInput.value) {
    alert('이메일을 입력해주세요');
  } else if (emailInput.value === 'test@codeit.com') {
    alert('이미 사용중인 아이디 입니다');
  }
  else if (!regEmail.test(emailInput.value)) {
      alert('올바른 이메일 주소가 아닙니다');
  }
}

function passwordVerify() {
  if (!passwordInput.value || !regPassword.test(passwordInput.value)) {
    alert('비밀번호는 영문 숫자 조합 8자리 이상을 입력해 주세요');
  } 
}

function passwordCheckVerify() {
  if (!passwordCheckInput.value || !regPassword.test(passwordCheckInput.value)) {
    alert('비밀번호는 영문 숫자 조합 8자리 이상을 입력해 주세요');
  } else if (passwordInput.value !== passwordCheckInput.value) {
    alert('비밀번호가 일치하지 않습니다');
  }
}

document.querySelector('#showIcon').addEventListener("pointerdown", function(e){
	e.preventDefault();
});

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("pointerdown", function(e) {
    if (btns[i].parentElement.previousElementSibling.type == 'password') {
      btns[i].parentElement.previousElementSibling.setAttribute('type','text');
      btns[i].classList.add('fa-eye-slash');
    } else {
      btns[i].parentElement.previousElementSibling.setAttribute('type','password');
      btns[i].classList.remove('fa-eye-slash');
    }
    e.preventDefault();
  })
}

emailInput.addEventListener('focusout', emailVerify);
passwordInput.addEventListener('focusout', passwordVerify);
passwordCheckInput.addEventListener('focusout', passwordCheckVerify);
