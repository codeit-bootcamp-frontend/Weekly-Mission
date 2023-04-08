document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const showPasswordBtn = document.getElementById("show-password-icon");
  const loginBtn = document.getElementById("login-btn");

  const validateEmail = (mail) => {
    const mailformat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) {
      return true;
    }
    return false;
  };

  usernameInput.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!validateEmail(e.target.value)) {
      alert("올바른 이메일 주소가 아닙니다.");
      return;
    }
  });
});
