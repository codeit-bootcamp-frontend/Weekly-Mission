(function () {
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;
  const currentUser = {
    id: "",
    pw: "",
  };

  const getElem = (scope, target) => scope.querySelector(target);

  const getUsers = () => {
    const tempData = { id: "test@codeit.com", pw: "codeit101" };
    if (!localStorage.getItem("test")) {
      localStorage.setItem("test", JSON.stringify(tempData));
    }
  };

  const form = getElem(document, ".form form");
  const emailInput = getElem(form, ".form .input-field input#email");
  const passwordInput = getElem(form, ".form .input-field input#password");
  const eyeIcon = getElem(form, ".input-field.password > .input i");

  const init = () => {
    window.addEventListener("load", () => {
      // get user data
      getUsers();
    });

    // event handlers
    eyeIcon.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        passwordInput.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });

    emailInput.addEventListener("focusout", () => {
      const userInput = emailInput.value.trim();
      userInput.length == 0
        ? alert("이메일을 입력해주세요.")
        : emailRegex.test(userInput)
        ? (currentUser.id = userInput)
        : alert("올바른 이메일 주소가 아닙니다.");

      emailInput.style.color = "#3e3e43";
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const tempUser = JSON.parse(localStorage.getItem("test"));

      currentUser.id === tempUser.id && passwordInput.value === tempUser.pw
        ? (location.href = "/pages/my-link")
        : alert("이메일과 비밀번호를 확인해주세요.");
    });
  };

  init();
})();
