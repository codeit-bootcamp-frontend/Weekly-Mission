document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.querySelector("#password");
  const passwordRepeatInput = document.querySelector("#password-repeat");
  const registerForm = document.querySelector("form.signin-form");
  const showPasswordBtn = document.getElementById("show-password-icon");
  const showPasswordBtnRepeat = document.getElementById(
    "show-password-icon-repeat"
  );

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

  const togglePassword = (passwordInput) => {
    if (passwordInput.getAttribute("type") === "password")
      passwordInput.setAttribute("type", "text");
    else {
      passwordInput.setAttribute("type", "password");
    }
  };

  const tryRegister = () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const passwordRepeat = passwordRepeatInput.value;
    //아이디 공란 체크
    if (!username) {
      alert("이메일을 입력해주세요.");
      return;
    }
    //아이디 포맷 체크
    if (!validateEmail(username)) {
      alert("올바른 이메일 주소가 아닙니다.");
      return;
    }
    //아이디 중복 체크
    if (username === "test@codeit.com") {
      alert("이미 사용 중인 아이디입니다.");
      return;
    }
    //비밀번호 확인 일치 여부 체크
    if (password !== passwordRepeat) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    //비밀번호 포맷 체크
    if (!validatePassword(password)) {
      alert("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
      return;
    }
    window.location = "/my-list.html";
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

  showPasswordBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    togglePassword(passwordInput);
  });

  showPasswordBtnRepeat.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    togglePassword(passwordRepeatInput);
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    tryRegister();
  });
});
