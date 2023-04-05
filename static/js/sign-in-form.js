const form = document.querySelector('form');
const email = document.querySelector('input.email');
const password = document.querySelector('input.password');
const togglers = document.querySelectorAll('.password-input i');
const emailRegex = "[a-z0-9]+@[a-z]+\.[a-z]{2,3}";

form.onsubmit = function(e) {
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "/my-link"
  }
  else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

function isValidEmail(e) {
  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  }
  else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
}

for (let i = 0; i < togglers.length; i++) {
  togglers[i].addEventListener("click", function() {
    if (togglers[i].previousElementSibling.type == 'password') {
      togglers[i].previousElementSibling.setAttribute('type','text');
      togglers[i].classList.add('fa-eye-slash');
    } else {
      togglers[i].previousElementSibling.setAttribute('type','password');
      togglers[i].classList.remove('fa-eye-slash');
    }
    
  })
}

email.addEventListener('focusout', isValidEmail);
