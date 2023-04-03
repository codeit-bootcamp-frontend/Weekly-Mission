const email = document.querySelector('input[type="email"]');
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidEmail(e) {
  if (email.value === "") {
    alert("이메일을 입력해주세요.")
  }
  else if (!email.value.match(validRegex)) {
    alert("올바른 이메일 주소가 아닙니다.")
  }
}

email.addEventListener('focusout', isValidEmail);