function focusIn(e) {
  // console.log("focusin 이벤트 발생");
  // console.log(e.target.parentElement);
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");
}

function focusOut(e) {
  // console.log("focusout 이벤트 발생");
  // console.log(e.target.parentElement);
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");
}

let inputNode = document.querySelectorAll(".login-form input");
inputNode.forEach((element) => {
  element.addEventListener("focusin", focusIn);
  element.addEventListener("focusout", focusOut);
})