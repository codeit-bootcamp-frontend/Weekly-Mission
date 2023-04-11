document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.querySelector("#password");
  const showPasswordBtn = document.getElementById("show-password-icon");
  const loginForm = document.querySelector("form.signin-form");

  const regexEmail = (mail) => {
    const mailformat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailformat.test(mail)) {
      return true;
    }
    return false;
  };

  const togglePassword = (passwordInput) => {
    let visiblity = false;
    visiblity = !visiblity;
    passwordInput.setAttribute("type", visiblity ? "text" : "password");
  };

  const tryLogin = () => {
    const username = document.getElementById("username");
    const password = passwordInput.value;
    if (username.value === "test@codeit.com" && password === "codeit101") {
      window.location = "/my-list.html";
      return;
    }
    alert("이메일과 비밀번호를 확인해주세요.");
  };

  usernameInput.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!regexEmail(e.target.value)) {
      alert("올바른 이메일 주소가 아닙니다.");
      return;
    }
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    tryLogin();
  });

  showPasswordBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    togglePassword(passwordInput);
  });
});
