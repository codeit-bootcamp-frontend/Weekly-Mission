function checkMemberAccount(e) {
  return (form.email.value === "test@codeit.com") && (form.password.value === "codeit101")
}

function checkSigninValue(e) {
  e.preventDefault()

  if (checkMemberAccount(e)) {
    location.href = "/my-link.html"
  }
  else {
    alert("이메일과 비밀번호를 확인해주세요.")
  }
}

form.addEventListener('submit', checkSigninValue)