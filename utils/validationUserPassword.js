export const validationUserPassword = (userPassword, flag = false) => {
  const numRegex = /[0-9]/;
  const strRegex = /[a-zA-Z]/;

  if (
    !flag &&
    userPassword &&
    (!numRegex.test(userPassword) ||
      !strRegex.test(userPassword) ||
      userPassword.length < 8)
  ) {
    return false;
  } else return true;
};
