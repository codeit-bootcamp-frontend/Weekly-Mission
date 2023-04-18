const getUsers = (flag = false) => {
  const dummyData = { email: "test@codeit.com", password: "codeit101" };

  const users = JSON.parse(localStorage.getItem("users"));

  users?.forEach((user) => {
    if (
      dummyData.email === user.email &&
      dummyData.password === user.password
    ) {
      flag = true;
      return;
    }
  });

  if (!flag && users === null) {
    localStorage.setItem("users", JSON.stringify([dummyData]));
  } else if (!flag) {
    localStorage.setItem("users", JSON.stringify([...users, dummyData]));
  }
};

export default getUsers;
