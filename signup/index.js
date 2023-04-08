function focusIn(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");
}

function focusOut(e) {
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");

  if (e.target.id === "email") {
    if (e.target.value === "") {
      alert("이메일을 입력해주세요.");
    }
    else if (e.target.value === "test@codeit.com") {
      alert("이미 사용 중인 아이디입니다.");
    }
  }
}

const inputNodes = document.querySelectorAll("input");
inputNodes.forEach((inputNode) => {
  inputNode.addEventListener("focusin", focusIn);
  inputNode.addEventListener("focusout", focusOut);
})