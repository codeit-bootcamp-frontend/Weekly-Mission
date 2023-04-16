class CustomGnb extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isLogin = false;
  }

  render() {
    this.shadowRoot.innerHTML = this.getTemplate();
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/styles/CustomGnb.css");
    this.shadowRoot.appendChild(linkElem);
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  getTemplate() {
    return `
      <header>
        <div class="header-container">
          <a href="/">
            <img class="logo" src="./images/logo.png" alt="로고" />
          </a>
          ${this.getLoginTemplate()}
        </div>
      </header>
    `;
  }

  getLoginTemplate() {
    return this.isLogin
      ? `<div class="profile-container">
        <img class="profile" src="images/profile.png" alt="프로필" />
        <p class="profile-email">Codeit@codeit.com</p>
      </div>`
      : `<a href="/signin.html" class="button-login">로그인</a>`;
  }
}

customElements.define("custom-gnb", CustomGnb);
