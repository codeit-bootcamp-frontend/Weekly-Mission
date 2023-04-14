export default class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
        <nav>
          <a href="/" class="logo">
            <img src="/static/public/linkbrary-logo.svg" alt="Linkbrary Logo" />
          </a>
          <a class="user">
            <img src="/static/public/codeit-profile.svg" alt="User Icon" />
            <span>Codeit@codeit.com</span>
          </a>
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
        @media (max-width: 767px) {
          nav .logo {
            width: 88.67px;
          }
          nav .user span {
            display: none;
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
