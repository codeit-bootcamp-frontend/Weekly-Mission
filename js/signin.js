const togglePasswordIcon = document.querySelector(".toggle-password");
const userEmailInput = document.querySelector(".user-email");
const userPasswordInput = document.querySelector(".user-password");
const loginForm = document.querySelector("#login-form");
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

// 비밀번호를 확인할 수 있는 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
function togglePassword(e) {
  e.preventDefault();
  const icon = e.target;
  const input = icon.previousElementSibling;
  if (icon.classList.contains("fi-rr-eye")) {
    icon.classList.remove("fi-rr-eye");
    icon.classList.add("fi-rr-eye-crossed");
  } else {
    icon.classList.remove("fi-rr-eye-crossed");
    icon.classList.add("fi-rr-eye");
  }
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

/* 1.이메일 input에서 focus out 일 때, 값이 없을 경우 alert으로 “이메일을 입력해주세요.” 메세지를 보입니다.
   2.이메일 input에서 focus out 일 때, 값이 있고, 이메일 형식에 맞지 않을 경우 alert으로 “올바른 이메일 주소가 아닙니다.” 메세지를 보입니다. */
function verifyEmail(e) {
  if (e.sourceCapabilities) {
    const email = e.target.value;
    if (!email) {
      alert("이메일을 입력해주세요.");
    } else if (!regexEmail.test(email)) {
      alert("올바른 이메일 주소가 아닙니다.");
    }
  }
}

function verifyLogininfo(e) {
  e.preventDefault();
  const trueEmail = "test@codeit.com";
  const truePw = "codeit101";
  if (
    userEmailInput.value === trueEmail &&
    userPasswordInput.value === truePw
  ) {
    location.replace("../my-link.html");
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
}

togglePasswordIcon.addEventListener("mousedown", togglePassword);
userEmailInput.addEventListener("focusout", verifyEmail);
loginForm.addEventListener("submit", verifyLogininfo);
