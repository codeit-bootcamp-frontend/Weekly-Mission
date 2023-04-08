let flag = false;

function focusIn(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");

  if (e.target.id === "email") {
    e.target.addEventListener("focusout", focusOut);
  }
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

function focusEmailInput(e) {
  e.target.focus();
  e.target.removeEventListener("focusout", focusOut);
}

let inputNode = document.querySelectorAll(".login-form input");
inputNode.forEach((element) => {
  element.addEventListener("focusin", focusIn);
  element.addEventListener("focusout", focusOut);
})