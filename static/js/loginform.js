const form = document.querySelector('form');

form.onsubmit = function(e) {
  const email = document.querySelector('input.email');
  const password = document.querySelector('input.password');
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "/my-link"
  }
  else {
    alert("이메일과 비밀번호를 확인해주세요.")
  }
}
