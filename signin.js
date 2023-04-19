const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// 이메일 형식을 검사하는 정규식
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function checkEmail() {
  const email = this.value.trim();
  if (email === "") {
    alert("이메일을 입력해주세요.");
  } else if (!isValidEmail(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

function checkLogin(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "/my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

//이메일에 올바른 값을 입력했는지 확인
emailInput.addEventListener("focusout", checkEmail);

//로그인
form.addEventListener("submit", checkLogin);
