import { getUserData } from "./data.js"; // 1. 유저 데이터 받아오기

let isLoggedIn = true; // 2. 유저가 로그인되었는지 확인(true:로그인된 상태)

class Gnb extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
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
            border-radius: 50%;
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
            .header .login-btn {
              width: 128px;
              height: 53px;
            }
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
            .header .login-btn {
              width: 80px;
              height: 37px;
              font-size: 14px;
              line-height: 37px;
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
            ${await this.renderGnb()}
          </div>
        </header>
      `;
    
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // 3. 로그인 데이터에 따라 gnb 렌더
  async renderGnb() {
    const user = await getUserData();
    return isLoggedIn
      ? `
      <div class="user">
        <img class="user-icon" src="${user.profileImageSource}">
        <span class="user-email">${user.email}</span>
      </div>
      `
      : `
      <a href="/signin.html" class="login-btn">로그인</a>
    `;
  }
}

// 4. Custom Element 등록
window.customElements.define("gnb-component", Gnb);
