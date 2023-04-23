import { getUserData } from "/api/common.js";
class Navbar extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          margin: 0 auto;
          padding: 0 200px;
          background-color: #F0F6FF;
        }
        
        nav a {
          text-decoration: none;
          color: #333;
        }

        nav a:hover {
          color: #0077b6;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .userImage {
          width: 28px;
          height: 28px
        }

        .login {
          display: inline-block;
          width: 128px;
        }

        @media (max-width: 1199px) {
          nav {
            padding: 0;
          }

          .nav {
            max-width: 799px;
            margin: auto;
          }

        @media (max-width: 767px) {
          nav {
            padding: 0 32px;
          }
        }
        

      </style>
      <nav>
        <div class="nav">
        <a href="/">
          <img src="/images/Linkbrary.svg" class="logo">
        </a>
        <div class="user">
          <img class="userImage">
          <p class="userId"></p>
        </div>
        </div>
      </nav>
    `;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

  }

  connectedCallback() {
    getUserData().then((res) => {
      const userImage = this.shadowRoot.querySelector(".userImage");
      const userId = this.shadowRoot.querySelector(".userId");

      userImage.setAttribute("src", `${res.profileImageSource}`);
      userId.textContent = res.email;
    })
  }
}

customElements.define('navbar-component', Navbar);
