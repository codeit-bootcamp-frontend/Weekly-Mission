const getUsers = (flag = false) => {
  const TEST_USER = { email: "test@codeit.com", password: "codeit101" };
  const USERS = JSON.parse(localStorage.getItem("users"));

  USERS?.forEach((user) => {
    if (
      TEST_USER.email === user.email &&
      TEST_USER.password === user.password
    ) {
      flag = true;
      return;
    }
  });

  if (!flag && USERS === null) {
    localStorage.setItem("users", JSON.stringify([TEST_USER]));
  } else if (!flag) {
    localStorage.setItem("users", JSON.stringify([...USERS, TEST_USER]));
  }
};

export default getUsers;
