document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.querySelector("#password");

  const validateEmail = (mail) => {
    const mailformat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) {
      return true;
    }
    return false;
  };

  const validatePassword = (password) => {
    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (password.match(passwordFormat)) {
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
    if (e.target.value === "test@codeit.com") {
      alert("이미 사용 중인 아이디입니다.");
      return;
    }
  });

  passwordInput.addEventListener("focusout", (e) => {
    if (!validatePassword(e.target.value)) {
      alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
      return;
    }
  });
});
