export default class Header extends HTMLElement {
  constructor() {
    super();

    this.isLoggedIn = false;
    this.user = JSON.parse(sessionStorage.getItem("currentUser"));
    this.user ? (this.isLoggedIn = true) : (this.isLoggedIn = false);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
        <nav>
          <a href="/" class="logo">
            <img src="/static/public/linkbrary-logo.svg" alt="Linkbrary Logo" />
          </a>
          ${
            !this.isLoggedIn
              ? `<a href="/pages/signin" class="signin">로그인</a>`
              : `<a class="user">
                  <img src="/static/public/codeit-profile.svg" alt="User Icon" />
                  <span>${this.user.email}</span>
                </a>`
          }
        </nav>
      <style>
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 5.3rem;
          width: 100%;
          background-color: transparent;
          z-index: 1;
        }
        nav .logo {
          display: flex;
          width: 133px;
        }
        nav .logo img {
          width: 100%;
          height: auto;
        }
        nav .user {
          box-sizing: border-box;
          height: 28px;
          display: flex;
          justify-content: space-between;
          gap: 6px;
        }
        nav .user span {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          display: flex;
          align-items: center;
          color: #3E3E43;
        }
        nav .signin {
          box-sizing: border-box;
          text-decoration: none;
          width: 128px;;
          height: 53px;
          background: linear-gradient(
            90.99deg,
            var(--linkbrary-primary) 0.12%,
            #6ae3fe 101.84%
          );
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px 20px;
          color: #f5f5f5;
          font-weight: 600;
          font-size: 18px;
          line-height: 21px;
        }
        @media (max-width: 863px) {
          nav .logo {
            width: 100px;
          }
          nav .signin {
            width: 100px;
          }
        }
        @media (max-width: 767px) {
          nav .logo {
            width: 77.58px;
          }
          nav .user span {
            display: none;
          }
          nav .signin {
            width: 80px;
            height: 37px;
            font-size: 14px;
            line-height: 16.71px;
            padding: 10px 16px;
          }
        }
      </style>
    `;
  }

  disconnectedCallback() {
    this.attachShadow({ mode: "closed" });
    this.shadowRoot.innerHTML = ``;
  }
}

customElements.define("header-component", Header);
