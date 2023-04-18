const NUM_REGEX = /[0-9]/;
const STR_REGEX = /[a-zA-Z]/;

export const validationUserPassword = (userPassword, flag = false) => {
  if (
    !flag &&
    userPassword &&
    (!NUM_REGEX.test(userPassword) ||
      !STR_REGEX.test(userPassword) ||
      userPassword.length < 8)
  ) {
    return false;
  } else return true;
};
