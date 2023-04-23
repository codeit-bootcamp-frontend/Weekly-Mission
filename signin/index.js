// (randomString)@(randomString2).(2-3 charaters)
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

// 필요한 것들 가져오기
const signinEmail = document.querySelector(`#signin-email`);
const signinPassword = document.querySelector(`#signin-password`);
const submitButton = document.querySelector('#submit-button');
const eyeIcon = document.querySelector('.eye-icon');

// email input 이벤트 핸들러
function correctInputEmail() {
  if (!signinEmail.value) {
    alert(`이메일을 입력해주세요.`);
    signinEmail.blur();
  } else if (!emailRegex.test(signinEmail.value)) {
    alert('올바른 이메일 주소가 아닙니다.');
    signinEmail.blur();
  }
};

// signin 이벤트 핸들러
function validSignin(e) {
  if (signinEmail.value === 'test@codeit.com' && signinPassword.value === 'codeit101') {
    e.preventDefault();
    location.href = "/my-link";
  } else {
    e.preventDefault();
    alert('이메일과 비밀번호를 확인해주세요.');
  }
};

// 비밀번호 보이기
function togglePassword(e) {
  if (signinPassword.type === "password") {
    signinPassword.type = "text";
    eyeIcon.src = "/assets/images/eye.svg";
    signinPassword.focus();
  } else {
    signinPassword.type = "password";
    eyeIcon.src = "/assets/images/eye-slash.svg";
    signinPassword.focus();
  }
};

// 이벤트핸들러 등록
signinEmail.addEventListener('focusout', correctInputEmail);
submitButton.addEventListener('click', validSignin);
eyeIcon.addEventListener('click', togglePassword);