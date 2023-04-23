/*
4. 비밀번호 input에서 focus out 일 때, 값이 없거나 문자열만 있거나 숫자만 있는 경우,
  alert으로 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.” 메세지를 보입니다.
5. 회원가입을 실행할 경우, 문제가 있는 경우 문제가 있는 부분을 alert 메세지로 알립니다.
6. 이외의 유효한 회원가입 시도의 경우, “/my-link”로 이동합니다.
7. 회원가입 버튼 클릭 또는 Enter키 입력으로 회원가입 실행돼야 합니다. */

// (randomString)@(randomString2).(2-3 charaters)
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
const passwordRegex = new RegExp('[a-zA-Z0-9]{8,10}$');

const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');
const signupPasswordRepeat = document.querySelector('#signup-password-repeat');
const submitButton = document.querySelector('#submit-button');
const eyeIcon = document.querySelector('.eye-icon');
const eyeIconRepeat = document.querySelector('.eye-icon-repeat');

// email input 이벤트 핸들러
function correctInputEmail(e) {
  if (!signupEmail.value) {
    alert(`이메일을 입력해주세요.`);
    signupEmail.blur();
  } else if (!emailRegex.test(signupEmail.value)) {
    alert('올바른 이메일 주소가 아닙니다.');
    signupEmail.blur();
  } else if (signupEmail.value === "test@codeit.com") {
    alert('이미 사용 중인 아이디입니다.');
    signupEmail.blur();
    location.reload();
  }
};

function correctInputPassword() {
  if (!passwordRegex.test(signupPassword.value)) {
    alert('비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
    signupPassword.blur();
  }
};

function validSignup(e) {
  if (signupPassword.value !== signupPasswordRepeat.value) {
    e.preventDefault();
    alert('비밀번호가 일치하지 않습니다.')
  } 
};

// 비밀번호 보이기
function togglePassword(e) {
  if (e.target.previousElementSibling.type === "password") {
    signupPassword.type = "text";
    signupPasswordRepeat.type = "text";
    eyeIcon.src = "/assets/images/eye.svg";
    eyeIconRepeat.src = "/assets/images/eye.svg";
  } else {
    signupPassword.type = "password";
    signupPasswordRepeat.type = "password";
    eyeIcon.src = "/assets/images/eye-slash.svg";
    eyeIconRepeat.src = "/assets/images/eye-slash.svg";
  }
};


// 이벤트핸들러 등록
signupEmail.addEventListener('focusout', correctInputEmail);
signupPassword.addEventListener('focusout', correctInputPassword);
submitButton.addEventListener('click', validSignup);
eyeIcon.addEventListener('click', togglePassword);
eyeIconRepeat.addEventListener('click', togglePassword);