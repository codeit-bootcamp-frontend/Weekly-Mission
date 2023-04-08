function addFocusOutEventListener(e) {
  if (e.target.id === "email") {
    e.target.addEventListener("focusout", emailFocusOut);
  } else if (e.target.id === "password") {
    e.target.addEventListener("focusout", passwordFocusOut);
  }
}

function focusIn(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");

  addFocusOutEventListener(e);
}

function focusOut(e) {
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");
}

function focusEmailInput(e) {
  e.target.focus();
  e.target.removeEventListener("focusout", emailFocusOut);
}

function emailFocusOut(e) {
  const emailValue = e.target.value;
  const validEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
    focusEmailInput(e);
  } else if (emailValue === "test@codeit.com") {
    alert("이미 사용 중인 아이디입니다.");
    focusEmailInput(e);
  } else if (!validEmail.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
    focusEmailInput(e);
  }
}

function focusPasswordInput(e) {
  e.target.focus();
  e.target.removeEventListener("focusout", passwordFocusOut);
}

function passwordFocusOut(e) {
  const passwordValue = e.target.value;
  const emptyPassword = ""; 
  const checkOnlyNumber = /^[0-9]+$/;
  const checkOnlyString = /^[\D]+$/;

  if (passwordValue.length < 8 || passwordValue === emptyPassword || checkOnlyNumber.test(passwordValue) || checkOnlyString.test(passwordValue)) {
    alert("비밀번호는 영문, 숫자 조합 8자리 이상 입력해 주세요.");
    focusPasswordInput(e);
  } 
}

const inputNodes = document.querySelectorAll("input");
inputNodes.forEach((inputNode) => {
  inputNode.addEventListener("focusin", focusIn);
  inputNode.addEventListener("focusout", focusOut);
})

const emailInput = inputNodes[0];
const passwordInput = inputNodes[1];
const passwordRemindInput = inputNodes[2];

emailInput.addEventListener("focusout", emailFocusOut);
passwordInput.addEventListener("focusout", passwordFocusOut);
