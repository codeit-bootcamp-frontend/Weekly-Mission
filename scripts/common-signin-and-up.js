const form = document.querySelector("form")
const emailFormat = /^[\w\-\.\/]+\@[\w\-]+\.[\w]+$/;

function addFocusStyle(e) {
  if (e.target.classList.contains("input")) {
    e.target.classList.add("focus-input")
  }
}

function removeFocusStyle(e) {
  if (e.target.classList.contains("input")) {
    e.target.classList.remove("focus-input")
  }
}

function checkEmailFormat(e) {
  if (e.target.id === "email") {
    const emailValue = e.target.value
    if (emailValue == "") {
      alert("이메일을 입력해주세요.")
    }
    else if (emailValue.search(emailFormat) === -1) {
      alert("올바른 이메일 주소가 아닙니다.")
    }
  }
}

form.addEventListener('focusin', addFocusStyle)

form.addEventListener('focusout', removeFocusStyle)
form.addEventListener('focusout', checkEmailFormat)