export const gettingStarted = () => {
  const tempData = { email: "test@codeit.com", password: "codeit101" };
  let flag = false;
  const users = JSON.parse(localStorage.getItem("users"));

  users?.forEach((user) => {
    if (tempData.email === user.email && tempData.password === user.password) {
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
