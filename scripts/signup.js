const formSignup = document.querySelector("form")
const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

function checkPasswordFormat(e) {
  if (e.target.id === "password") {
    const passwordValue = e.target.value
    if (passwordValue.search(passwordFormat) === -1) {
      alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.")
    }
  }
}

// function printEvent(e) {
//   if (e.target.id === "password") {
//     console.dir(e.type)
//     console.dir(e.target)
//   }
// 
// } 

// formSignup.addEventListener('focusout', printEvent)
formSignup.addEventListener('focusout', checkPasswordFormat)