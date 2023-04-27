const EMAIL_REGEX = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

export const validationUserEmail = (inputEmail, type) => {
  let confirmedUserEmail = null;

  if (inputEmail.length == 0) {
    alert("이메일을 입력해주세요.");
  } else if (EMAIL_REGEX.test(inputEmail)) {
    confirmedUserEmail = inputEmail;
  } else alert("올바른 이메일 주소가 아닙니다.");

  if (type === "signup") {
    let flag = false;
    const USERS = JSON.parse(localStorage.getItem("users"));

    USERS?.forEach((user) => {
      if (inputEmail === user.email) {
        flag = true;
        return;
      }
    });

    if (flag) alert("이미 사용 중인 아이디입니다.");
  }

  return confirmedUserEmail;
};
