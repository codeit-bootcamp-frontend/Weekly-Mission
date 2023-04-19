const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPw = document.querySelector("#confirmPw");

// 이메일 형식을 검사하는 정규식
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

//이메일 체크 함수
function checkEmail(event) {
  const email = this.value.trim();
  if (email === "") {
    alert("이메일을 입력해주세요.");
    event.target.blur();
  } else if (!isValidEmail(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
    event.target.blur();
  } else if (email === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
    event.target.blur();
  }
}

//비밀번호 체크 함수
function checkPw(event) {
  const password = this.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (password === "" || !regex.test(password)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    event.target.blur();
  }
}

//회원가입시 확인 함수
function register(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirm = confirmPw.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (email === "") {
    alert("이메일을 입력해주세요.");
    return;
  } else if (!isValidEmail(email)) {
    alert("올바른 이메일 주소가 아닙니다.");
    return;
  } else if (email === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
    return;
  } else if (password === "" || !regex.test(password)) {
    alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    return;
  } else if (confirm !== password) {
    alert("입력한 비밀번호와 비밀번호 확인이 같지 않습니다.");
    return;
  } else {
    location.href = "/my-link/";
  }
}

//이메일에 올바른 값을 입력했는지 확인
emailInput.addEventListener("focusout", checkEmail);

//비밀번호에 올바른 값을 입력했는지 확인
passwordInput.addEventListener("focusout", checkPw);

//회원가입시 문제 있는지 확인
form.addEventListener("submit", register);
