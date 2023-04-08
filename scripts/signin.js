function checkMemberAccount(e) {
  return (form.email.value === "test@codeit.com") && (form.password.value === "codeit101")
}

function checkSigninValidation(e) {
  e.preventDefault()

  if (checkMemberAccount(e)) {
    location.href = "/my-link.html"
  }
  else {
    alert("이메일과 비밀번호를 확인해주세요.")
  }
}

function enterKeyEvent(e) {
  if (e.code === "Enter") {
    checkSigninValidation(e)
  }
}

form.addEventListener('submit', checkSigninValidation)

window.addEventListener('keydown', enterKeyEvent)
