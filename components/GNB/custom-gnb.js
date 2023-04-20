class CustomGNB extends HTMLElement {
  /* 로그인 정보를 담는 유저 프로퍼티 */
  #user = null;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/components/GNB/style.css" />
      <nav class="gnb">
        <a class="linkbrary-logo" href="/">
          <img class="linkbrary-logo-image" src="/images/Linkbrary.svg" />
        </a>
        <a class="login-button" href="/signin/">
          로그인
        </a>
      </nav>
    `;
  }

  get user() {
    return this.#user;
  }

  set user(data) {
    if (data) {
      this.#user = data;
      /* user 데이터가 변경되면 rerendering */
      this.render();
    }
  }

  connectedCallback() {
    this.#user ? this.render() : null;
  }

  render() {
    const { profileImageSource, email } = this.#user;
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/components/GNB/style.css" />
      <nav class="gnb">
        <a class="linkbrary-logo" href="/">
          <img class="linkbrary-logo-image" src="/images/Linkbrary.svg" />
        </a>
        <div class="profile-container">
          <img src=${profileImageSource} />
          <span class="profile-email">${email}</span>
        </div>
      </nav>
    `;
  }
}

customElements.define("custom-gnb", CustomGNB);
