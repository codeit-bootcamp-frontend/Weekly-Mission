class GnbComponent extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM 생성
    const shadow = this.attachShadow({ mode: "open" });

    // CSS 파일 적용
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/gnb/gnt-component.css");
    shadow.appendChild(linkElem);

    const gnbContainer = document.createElement("nav");
    gnbContainer.classList.add("gnb-container");

    const logoLinkAnchor = document.createElement("a");
    logoLinkAnchor.href = "/";

    const logoImage = document.createElement("img");
    logoImage.classList.add("logo");
    logoImage.alt = "logo";
    logoImage.src = "/static/imgs/Linkbrary.svg";

    let loginButton;
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      const loggedInText = document.createElement("div");
      loggedInText.classList.add("user-profile");

      const email = sessionStorage.getItem("email");
      loggedInText.innerHTML = `
        <img class = "profile-icon" src = "/static/imgs/users/profile.svg"><p class="user-email">${email}</p>
        `;
      // loggedInText.textContent = "로그인됨";
      loginButton = loggedInText;
    } else {
      loginButton = document.createElement("a");
      loginButton.classList.add("login");
      loginButton.href = "/signin/";
      loginButton.textContent = "로그인";
    }

    // 자식 추가
    logoLinkAnchor.appendChild(logoImage);

    gnbContainer.appendChild(logoLinkAnchor);
    gnbContainer.appendChild(loginButton);

    shadow.appendChild(gnbContainer);
  }
}

customElements.define("gnb-header", GnbComponent);
