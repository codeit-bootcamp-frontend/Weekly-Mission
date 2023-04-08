(function () {
  // function
  const getElem = (scope, target) => scope.querySelector(target);
  const getElemAll = (scope, target) => scope.querySelectorAll(target);

  const gettingStarted = () => {
    const tempData = { email: "test@codeit.com", password: "codeit101" };
    let flag = false;
    const users = JSON.parse(localStorage.getItem("users"));

    users?.forEach((user) => {
      if (
        tempData.email === user.email &&
        tempData.password === user.password
      ) {
        flag = true;
        return;
      }
    });

    if (!flag && users === null) {
      localStorage.setItem("users", JSON.stringify([tempData]));
    } else if (!flag) {
      localStorage.setItem("users", JSON.stringify([...users, tempData]));
    }
  };

  // state & elements
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g;
  const currentUser = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const form = getElem(document, ".form form");
  const emailInput = getElem(form, ".form .input-field input#email");
  const passwordInput = getElem(form, ".form .input-field input#password");
  const confirmPasswordInput = getElem(
    form,
    ".form .input-field input#confirm"
  );
  const eyeIcons = getElemAll(form, ".input-field .input i");

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      gettingStarted();
    });

    // event handlers
    eyeIcons.forEach((eyeIcon) => {
      eyeIcon.addEventListener("click", (e) => {
        const target = e.target.previousSibling.previousSibling;

        if (target.type === "password") {
          target.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
        } else {
          target.type = "password";
          eyeIcon.classList.replace("bx-show", "bx-hide");
        }
      });
    });

    emailInput.addEventListener("focusout", () => {
      const userInput = emailInput.value.trim();
      userInput.length == 0
        ? alert("이메일을 입력해주세요.")
        : emailRegex.test(userInput)
        ? (currentUser.email = userInput)
        : alert("올바른 이메일 주소가 아닙니다.");

      emailInput.style.color = "#3e3e43";
    });

    // passwordInput

    // form.addEventListener("submit", (e) => {
    //   e.preventDefault();

    //   let flag = false;

    //   const users = JSON.parse(localStorage.getItem("users"));

    //   users.forEach((user) => {
    //     if (
    //       currentUser.email === user.email &&
    //       passwordInput.value === user.password
    //     ) {
    //       flag = true;
    //       return;
    //     }
    //   });

    //   flag
    //     ? (location.href = "/pages/my-link")
    //     : alert("이메일과 비밀번호를 확인해주세요.");
    // });
  };

  init();
})();
