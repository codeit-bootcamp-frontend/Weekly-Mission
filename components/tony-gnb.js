export class GlobalNavigationBar extends HTMLElement {
  constructor(data) {
    super();
    localStorage.setItem('token', data.email);
    this.attachShadow({ mode: 'open' });
    this.isLogin = localStorage.getItem('token')
      ? `
      <div class="user">
        <img src="/pictures/profile.png" />
        <span>Codeit@codeit.com</span>
      </div>
      `
      : `
      <button>로그인</button>
      `;

    this.shadowRoot.innerHTML = `
    <style>
      a {
        text-decoration: none;
      }

      header {
        box-sizing: border-box;
        width: 100vw;
        background: #f0f6ff;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
      
      header .header-container {
        width: calc(100% - 25rem);
        max-width: 1920px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 12.5rem 1.5rem;
        margin: 0 auto;
      }
      
      .header-section header .logo {
        width: 8.313rem;
        height: 1.5rem;
        cursor: pointer;
      }
      
      header button {
        width: 8rem;
        height: 3.375rem;
        padding: 1rem 1.25rem 1rem 1.25rem;
        color: #fff;
        background: linear-gradient(90deg, #6d6afe, #6ae3fe);
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        font-family: 600;
        cursor: pointer;
      }

      header .user {
        display: flex;
        align-items: center;
      }

      header .user img {
        margin-right: 6px;
      }

      @media (min-width: 375px) and (max-width: 767px) {
        /*-------------------------header----------------------*/
        header .header-container {
          width: calc(100% - 4rem);
          padding: 1rem 2rem 1.5rem;
        }

        header .user span {
          display:none
        }
      }
    </style>
    <header>
      <div class="header-container">
        <a href="/">
          <img class="" src="/pictures/Linkbrary.png" alt="logo" />
        </a>
        <a href="/pages/signin/signin.html">
          ${this.isLogin}
        </a>
      </div>
    </header>
    `;
  }
  connectedCallback() {}
}

customElements.define('tony-gnb', GlobalNavigationBar);
