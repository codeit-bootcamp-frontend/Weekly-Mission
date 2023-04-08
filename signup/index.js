function focusIn(e) {
  e.target.classList.add("focus-text-color");
  e.target.parentElement.classList.add("focus-outline");
}

function focusOut(e) {
  e.target.classList.remove("focus-text-color");
  e.target.parentElement.classList.remove("focus-outline");

  if (e.target.id === "email") {
    let regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;

    if (e.target.value === "") {
      alert("이메일을 입력해주세요.");
    } else if (e.target.value === "test@codeit.com") {
      alert("이미 사용 중인 아이디입니다.");
    } else if (!regex.test(e.target.value)) {
      alert("올바른 이메일 주소가 아닙니다.");
    }
  }
}

const inputNodes = document.querySelectorAll("input");
inputNodes.forEach((inputNode) => {
  inputNode.addEventListener("focusin", focusIn);
  inputNode.addEventListener("focusout", focusOut);
})