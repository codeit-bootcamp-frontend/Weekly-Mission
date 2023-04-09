const validEmail = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/;

const inputNodes = document.querySelectorAll("input");
const emailInput = inputNodes[0];
const passwordInput = inputNodes[1];

function focusin(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");
}

function focusout(e) {
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");
}

function checkEmailValid(e) {
  const emailValue = e.target.value;

  if (emailValue === "") {
    alert("이메일을 입력해주세요.");
  } else if (!validEmail.test(emailValue)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

inputNodes.forEach((inputNode) => {
  inputNode.addEventListener("focusin", focusin);
  inputNode.addEventListener("focusout", focusout);
})

emailInput.addEventListener("focusout", checkEmailValid);

const signinForm = document.querySelector(".signin-form");

function checkValidSignin(e) {
  e.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  
  if (emailValue === "test@codeit.com" && passwordValue === "codeit101") {
    location.href = "/my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

signinForm.addEventListener("submit", checkValidSignin);