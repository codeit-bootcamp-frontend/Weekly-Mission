import ProcessData from "/scripts/ProcessData.js";

class CustomGnb extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isLogin = true;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  render() {
    this.isLogin ? this.applyLoginTemplate() : this.applyDefaultTemplate();
  }

  applyDefaultTemplate() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomGnb.css");
      </style>
      <header>
        <div class="header-container">
          <a href="/">
            <img class="logo" src="./images/logo.png" alt="로고" />
          </a>
          <a href="/signin.html" class="btn-login">로그인</a>
        </div>
      </header>
    `;
  }

  async applyLoginTemplate() {
    const processor = new ProcessData();
    const userData = await processor.fetchUserData();
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomGnb.css");
      </style>
      <header>
        <div class="header-container">
          <a href="/">
            <img class="logo" src="./images/logo.png" alt="로고" />
          </a>
          <div class="user-container">
            <img class="img-user" src="${userData.profileImageSource}" alt="${userData.name}" />
            <p class="user-email">${userData.email}</p>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("custom-gnb", CustomGnb);
