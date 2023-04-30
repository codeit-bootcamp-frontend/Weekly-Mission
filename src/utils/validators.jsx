export const isEmailValid = (email) => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(String(email).toLowerCase());
};

export const isPasswordValid = (password) => {
  if (password.length < 8) {
    return false;
  }

  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};
