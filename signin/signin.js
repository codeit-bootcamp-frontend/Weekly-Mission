const email = document.querySelector("#signin-email");
const password = document.querySelector("#signin-password");
const signinForm = document.querySelector("form");
const inputs = document.querySelectorAll(".input");

const isValidEmail = (e) => {
  const emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
  if (e.sourceCapabilities === null) {
    return;
  }
  if (email.value === "") {
    alert("이메일을 입력해주세요.");
  } else if (!email.value.match(emailRegex)) {
    alert("올바른 이메일 주소가 아닙니다.");
  }
};

const isValidAccount = (e) => {
  e.preventDefault();

  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    sessionStorage.clear();
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("password", password.value);
    location.href = "../my-link/";
  } else {
    alert("이메일과 비밀번호를 확인해주세요.");
  }
};

// eys toggle
const eyeIcons = document.querySelectorAll(".eye-icon");
const passwordEyeIcon = eyeIcons[0];
const passwordCheckEyeIcon = eyeIcons[0];

eyeIcons.forEach((eyeIcon) => {
  let visiblity = false;

  eyeIcon.addEventListener("pointerdown", (e) => {
    e.preventDefault();

    const target = e.target.previousSibling;
    visiblity = !visiblity;

    target.type = visibility ? "text" : "password";
    eyeIcon.classList.toggle("fa-eye-slash");
    eyeIcon.classList.toggle("fa-eye");
  });
});

// validation에 대한 event listener 등록
email.addEventListener("focusout", isValidEmail);
signinForm.addEventListener("submit", isValidAccount);
