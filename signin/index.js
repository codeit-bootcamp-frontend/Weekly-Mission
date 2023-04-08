function focusIn(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");
}

function focusOut(e) {
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");
  
  if (e.target.id === "email" && e.target.value === "") {
    alert("이메일을 입력해주세요.");
  }
}

let inputNode = document.querySelectorAll(".login-form input");
inputNode.forEach((element) => {
  element.addEventListener("focusin", focusIn);
  element.addEventListener("focusout", focusOut);
})