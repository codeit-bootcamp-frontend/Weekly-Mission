const NUM_REGEX = /[0-9]/;
const STR_REGEX = /[a-zA-Z]/;

const checkREGEX = (targetString) => {
  if (!NUM_REGEX.test(targetString)) return false;
  if (!STR_REGEX.test(targetString)) return false;

  return true;
};

export const validationUserPassword = (userPassword) => {
  if (!userPassword || userPassword.length < 8) return false;
  if (!checkREGEX(userPassword)) return false;

  return true;
};
