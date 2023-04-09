const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const btns = document.querySelectorAll('.btn');

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