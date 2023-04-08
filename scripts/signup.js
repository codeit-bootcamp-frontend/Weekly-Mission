const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

function checkEmailExist(e) {
  if ((e.target.id === "email") && (e.sourceCapabilities) || (e.target.className === "form-signin-and-up") || (e.code === "Enter")) {
    const emailValue = form.email.value
    if (emailValue === "test@codeit.com") {
      alert("이미 사용 중인 아이디입니다.")
      return false
    }
    else {
      return true
    }
  }
}

function checkPasswordFormat(e) {
  if ((e.target.id === "password") && (e.sourceCapabilities) || (e.target.className === "form-signin-and-up") || (e.code === "Enter")) {
    const passwordValue = form.password.value
    if (passwordValue.search(passwordFormat) === -1) {
      alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
      return false
    }
    else {
      return true
    }
  }
}

function checkPasswordSame(e) {
  if ((e.target.id === "check-password") && (e.sourceCapabilities) || (e.target.className === "form-signin-and-up") || (e.code === "Enter")) {
    if (!(form.password.value === form.querySelector("#check-password").value)) {
      alert("비밀번호가 동일하지 않습니다.")
      return false
    }
    else {
      return true
    }
  }
}

function checkSignupValidation(e) {
  e.preventDefault()
  const check1 = checkEmailFormat(e)
  const check2 = checkEmailExist(e)
  const check3 = checkPasswordFormat(e)
  const check4 = checkPasswordSame(e)

  if (check1 && check2 && check3 && check4) {
    location.href = "/my-link.html"
  }
}

function enterKeyEvent(e) {
  if (e.code === "Enter") {
    checkSignupValidation(e)
  }
}

form.addEventListener('focusout', checkEmailExist)
form.addEventListener('focusout', checkPasswordFormat)
form.addEventListener('focusout', checkPasswordSame)

form.addEventListener('submit', checkSignupValidation)

window.addEventListener('keydown', enterKeyEvent)
