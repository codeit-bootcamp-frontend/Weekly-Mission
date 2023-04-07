function focusIn(e) {
  // console.log("focusin 이벤트 발생");
  // console.log(e.target.parentElement);
  e.target.parentElement.classList.add("focus");
}

function focusOut(e) {
  // console.log("focusout 이벤트 발생");
  // console.log(e.target.parentElement);
  e.target.parentElement.classList.remove("focus");
}

let inputNode = document.querySelectorAll(".login-form input");
inputNode.forEach((element) => {
  element.addEventListener("focusin", focusIn);
  element.addEventListener("focusout", focusOut);
})