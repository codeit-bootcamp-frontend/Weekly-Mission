class GnbComponent extends HTMLElement {
  #prop = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get prop() {
    return this.#prop;
  }

  set prop(newProp) {
    this.#prop = newProp;
    this.gnbContainer.innerHTML = this.template;
  }

  get loginContent() {
    return this.prop ? this.loggedInText : this.loginButton;
  }

  get loginButton() {
    return `<a class="login" href="/signin/">로그인</a>`;
  }

  get loggedInText() {
    return `
      <div class="user-profile">
        <img class="profile-icon" src="${this.prop.profileSrc}" />
        <p class="user-email">${this.prop.email}</p>
      </div>
    `;
  }

  get template() {
    return `
      <a href="/">
        <img class="logo" alt="logo" src="/static/imgs/Linkbrary.svg" />
      </a>
      ${this.loginContent}
    `;
  }

  render() {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/gnb/gnt-component.css");
    this.shadowRoot.appendChild(linkElem);

    const gnbContainer = document.createElement("nav");
    gnbContainer.classList.add("gnb-container");
    this.gnbContainer = gnbContainer;

    gnbContainer.innerHTML = this.template;
    this.shadowRoot.appendChild(gnbContainer);
  }
}
customElements.define("gnb-header", GnbComponent);
