(function () {
  const getUsers = () => {
    // localStorage에서 가져오는 걸로

    localStorage.setItem("id", "pw");
  };

  // 코드 작성

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      getUsers();
    });
    // 이벤트리스너 작성
  };
  init();
})();
