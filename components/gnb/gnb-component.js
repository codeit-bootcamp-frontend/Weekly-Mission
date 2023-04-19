class GnbComponent extends HTMLElement {
  #isLoggedIn;
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get isLoggedIn() {
    return this.#isLoggedIn;
  }

  set isLoggedIn(newIsLoggedIn) {
    this.#isLoggedIn = newIsLoggedIn;
  }

  checkLoginStatus() {
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const loginStatusElement = this.isLoggedIn
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
    const email = sessionStorage.getItem("email");
    loggedInText.innerHTML = `
      <img class="profile-icon" src="/static/imgs/users/profile.svg">
      <p class="user-email">${email}</p>
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

    const logoLinkAnchor = document.createElement("a");
    logoLinkAnchor.href = "/";

    const logoImage = document.createElement("img");
    logoImage.classList.add("logo");
    logoImage.alt = "logo";
    logoImage.src = "/static/imgs/Linkbrary.svg";

    const loginButton = this.checkLoginStatus();

    logoLinkAnchor.appendChild(logoImage);

    gnbContainer.appendChild(logoLinkAnchor);
    gnbContainer.appendChild(loginButton);

    this.shadowRoot.appendChild(gnbContainer);
  }
}

customElements.define("gnb-header", GnbComponent);
