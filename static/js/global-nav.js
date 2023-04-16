
const template = document.createElement("template");
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }

    #navbar {
      position: fixed;
      inset: 0;
      height: 9.4rem;
      background-color: var(--navbar-background);
    }
  
    #navbar #navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 2rem 20rem;
      max-width: 1920px;
    }
  
    #navbar-container #logo img {
      width: 13.3rem;
    }
  
    #navbar-container #gnb-login-button {
      cursor: pointer;
      width: 12.8rem;
      text-align: center;
      border-radius: 0.8rem;
      padding: 1.6rem 0;
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--link-button-text);
      background: linear-gradient(90deg, var(--primary), var(--light-primary));
    }

    #gnb-profile {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      #navbar #navbar-container {
        max-width: 86.4rem;
        padding: 2rem 3.2rem;
      }
    }

    @media (max-width: 767px) {
      #navbar {
        height: 6.3rem;
        margin: 0;
        padding: 0 3.2rem;
      }
    
      #navbar #navbar-container {
        padding: 1.3rem 0;
      }
    
      #navbar-container #logo img {
        width: 7.7rem;
      }
      
      #navbar-container #gnb-login-button {
        width: 8rem;
        padding: 1rem 0;
        font-size: 1.4rem;
      }
    }

  </style>
  <nav id="navbar">
    <div id="navbar-container">
      <div id="logo">
        <a href="/">
          <img src="/static/Linkbrary.png" alt="Linkbrary Logo">
        </a>
      </div>
      <div id="gnb-login-button">
        로그인
      </div>
      <div id="gnb-profile">
        프로필
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

    loginButton.addEventListener('click', () => location.href= '/signin');

    if (login === "on") {
      profile.style.display = "block";
      loginButton.style.display = "none";
    } else {
      profile.style.display = "none";
      loginButton.style.display = "block";
    }
  }
}

customElements.define("global-nav", Gnb);
