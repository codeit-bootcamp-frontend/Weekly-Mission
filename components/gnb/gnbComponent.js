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
    console.log(this.loginButton);
    this.gnbContainer.removeChild(this.loginButton);

    const loginButton = this.checkLoginStatus();
    this.loginButton = loginButton;

    this.gnbContainer.appendChild(loginButton);

    this.shadowRoot.appendChild(this.gnbContainer);
  }

  checkLoginStatus() {
    const loginStatusElement = this.prop
      ? this.createLoggedInText()
      : this.createLoginButton();
    return loginStatusElement;
  }

  createLoginButton() {
    const loginButton = document.createElement("a");
    loginButton.classList.add("login");
    loginButton.href = "/signin/";
    loginButton.textContent = "로그인";
    return loginButton;
  }

  createLoggedInText() {
    const loggedInText = document.createElement("div");
    loggedInText.classList.add("user-profile");
    loggedInText.innerHTML = `
      <img class="profile-icon" src="${this.prop.profileSrc}"/>
      <p class="user-email">${this.prop.email}</p>
    `;
    return loggedInText;
  }

  render() {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/gnb/gnt-component.css");
    this.shadowRoot.appendChild(linkElem);

    const gnbContainer = document.createElement("nav");
    gnbContainer.classList.add("gnb-container");
    this.gnbContainer = gnbContainer;
    const logoLinkAnchor = document.createElement("a");
    logoLinkAnchor.href = "/";

    const logoImage = document.createElement("img");
    logoImage.classList.add("logo");
    logoImage.alt = "logo";
    logoImage.src = "/static/imgs/Linkbrary.svg";

    const loginButton = this.checkLoginStatus();
    this.loginButton = loginButton;
    logoLinkAnchor.appendChild(logoImage);

    gnbContainer.appendChild(logoLinkAnchor);
    gnbContainer.appendChild(loginButton);

    this.shadowRoot.appendChild(gnbContainer);
  }
}
customElements.define("gnb-header", GnbComponent);
