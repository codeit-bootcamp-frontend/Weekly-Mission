const validEmail = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,3}$/;

function focusIn(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");
}

function focusOut(e) {
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");
  
  if (e.target.id === "email") {
    const regexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;

    if (e.target.value === "") {
      alert("이메일을 입력해주세요.");
      focusEmailInput(e);
    } else if (!regexp.test(e.target.value)) {
      alert("올바른 이메일 주소가 아닙니다.");
      focusEmailInput(e);
    }
  }
}

inputNodes.forEach((inputNode) => {
  inputNode.addEventListener("focusin", focusin);
  inputNode.addEventListener("focusout", focusout);
let inputNode = document.querySelectorAll(".login-form input");
inputNode.forEach((element) => {
  element.addEventListener("focusin", focusIn);
  element.addEventListener("focusout", focusOut);
})

function checkValidAccount(e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "/my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", checkValidAccount);