export const validationUserEmail = (inputEmail, type) => {
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

  let confirmedUserEmail = null;

  inputEmail.length == 0
    ? alert("이메일을 입력해주세요.")
    : emailRegex.test(inputEmail)
    ? (confirmedUserEmail = inputEmail)
    : alert("올바른 이메일 주소가 아닙니다.");

  if (type === "signup") {
    let flag = false;
    const users = JSON.parse(localStorage.getItem("users"));

    users?.forEach((user) => {
      if (inputEmail === user.email) {
        flag = true;
        return;
      }
    });

    if (flag) alert("이미 사용 중인 아이디입니다.");
  }

  return confirmedUserEmail;
};
