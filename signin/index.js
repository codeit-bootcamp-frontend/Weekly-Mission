// (randomString)@(randomString2).(2-3 charaters)
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

// 필요한 form, email, pasword 가져오기
const signinEmail = document.querySelector(`#signin-email`);
const signinPassword = document.querySelector(`#signin-password`);
const submitButton = document.querySelector('#submit-button');

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

// 이벤트핸들러 등록
signinEmail.addEventListener('focusout', correctInputEmail);
submitButton.addEventListener('click', validSignin);