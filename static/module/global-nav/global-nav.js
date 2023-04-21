const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");
    @import url("/static/module/global-nav/global-nav.css");
  </style>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <a href="/">
          <img src="/static/img/Linkbrary.png" alt="Linkbrary Logo">
        </a>
      </div>
      <a id="gnb-login-button">
        로그인
      </a>
      <div id="gnb-profile">
        <div class="img-container">
          <img id="profile-img" alt="Default profile icon" width="10">
        </div>
        <p id="profile-email"></p>
      </div>
    </div>
  </nav>
`;

class Gnb extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    const login = this.getAttribute("login");
    const loginButton = this.shadowRoot.getElementById("gnb-login-button");
    const profile = this.shadowRoot.getElementById("gnb-profile");
    
    if (login === "on") {
      profile.style.display = "flex";
      loginButton.style.display = "none";
    } else {
      profile.style.display = "none";
      loginButton.style.display = "block";
    }
    
    const profileEmail = this.shadowRoot.getElementById("profile-email")
    const profileImage = this.shadowRoot.getElementById("profile-img")

      async function getProfile() {
        const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user')
        const { data } = await response.json()
        const { email, profileImageSource } = data
        if (email !== undefined) {
          profileEmail.innerText = email
        }
        if (profileImageSource !== undefined) {
          profileImage.src = profileImageSource
        } else {
          profileImage.src = "/static/img/default-profile-img.png"
        }
      }
      getProfile()
  }
}

customElements.define("global-nav", Gnb);
