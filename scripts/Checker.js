export default class Checker {
  static get emailFormat() {
    return /^[\w\-\.\/]+\@[\w\-]+\.[\w]+$/;
  }

  static get pwFormat() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  }

  static checkEmailFormat(email) {
    return Checker.emailFormat.test(email);
  }

  static checkPasswordFormat(password) {
    return Checker.pwFormat.test(password);
  }

  static checkMemberAccount(email, password) {
    return email === "test@codeit.com" && password === "codeit101";
  }

  static checkEmailExist(email) {
    return !(email === "test@codeit.com");
  }

  static checkPasswordRepeatSame(password, passwordRepeat) {
    return password === passwordRepeat;
  }
}
