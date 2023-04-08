const formSignin = document.querySelector("#form-signin")

function checkMemberAccount(e) {
  return (formSignin.email.value === "test@codeit.com") && (formSignin.password.value === "codeit101")
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

formSignin.addEventListener('submit', checkSigninValue)