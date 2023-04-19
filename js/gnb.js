let isLoggedIn = false; // 유저가 로그인 되었는지 확인, 상태에 따라 gnb 다르게 보여짐

class Gnb extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = `
        <style>
          @import url("./css/reset.css");
          .header {
            position: sticky;
            top: 0;
            background-color: var(--gray-5);
            z-index: 1;
          }
          .header .container {
            padding: 0 200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 94px;
          }
          .header .logo {
            width: 136px;
            height: 32px;
            background-image: url(../img/Linkbrary.png);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
          }
          .user {
            display: flex;
            align-items: center;
          }
          .user-icon {
            width: 28px;
            cursor: pointer;
          }
          .user-email {
            margin-left: 6px;
          }
          .header .login-btn {
            font-family: 'Pretendard';
            width: 128px;
            height: 53px;
            background-image: linear-gradient(to right, #6d6afe, #6ae3fe);
            border-radius: 8px;
            color: white;
            line-height: 55px;
            font-size: 18px;
            text-align: center;
          }
          @media (max-width: 1199px) {
            .container {
              padding: 0 32px;
            }
            .header .container {
              width: 800px;
              margin: 0 auto;
              padding: 0 32px;
            }
            .header .logo {
              width: 133px;
            }
          @media (max-width: 868px) {
            .header .container {
              width: 100%;
          }
          @media (max-width: 767px) {
            .header .container {
              height: 64px;
            }
            .header .logo {
              width: 88px;
            }
            .user-email {
              display: none;
            }
          }
          @media (max-width: 375px) {
            .header {
              width: 375px;
            }
          }
        </style>
        <header class="header">
          <div class="container">
            <h1><a href="/" class="logo ir-pm">logo</a></h1>
            ${this.loginprofile()}
          </div>
        </header>
      `;
    // Shadow DOM에 템플릿 추가
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  loginprofile() {
    return isLoggedIn ?
      `
      <div class="user">
        <img class="user-icon" src="./img/profile.png">
        <span class="user-email">Codeit@codeit.com</span>
      </div>
      `
    : `
      <a href="/signin.html" class="login-btn">로그인</a>
    `;
  }
}
// Custom Element 등록
window.customElements.define("gnb-component", Gnb);
