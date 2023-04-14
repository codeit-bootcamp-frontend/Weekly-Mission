class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      footer {
        font-family: Arial, Helvetica, sans-serif;
        width: 100vw;
        height: 10rem;
        background-color: black;
      }
      
      footer .footer-container {
        width: calc(100% - 208px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        max-width: 1920px;
        margin: 0 auto;
        height: 5.125rem;
      }
      
      footer .footer-container .codeit {
        color: #676767;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.125rem;
        text-align: center;
      }
      
      footer a {
        color: #fff;
        margin-right: 0.938rem;
      }
      
      footer .icons {
        width: 8.125rem;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      footer .icons img {
        cursor: pointer;
      }
      @media (min-width: 375px) and (max-width: 767px) {
        footer .footer-container {
          position: relative;
          width: calc(100% - 4rem);
        }
      
        footer .footer-container .codeit {
          position: absolute;
          top: 6rem;
          left: 0;
        }
      }
    </style>
    <footer>
    <div class="footer-container">
      <div class="codeit">@codeit - 2023</div>
      <div class="privacy">
        <a href="/pages/privacy.html">Privacy Policy</a>
        <a href="/pages/faq.html">FAQ</a>
      </div>
      <div class="icons">
        <a href="/pages/facebook.html">
          <img src="/pictures/icons/Vector.png" />
        </a>
        <a href="/pages/twitter.html">
          <img src="/pictures/icons/Vector-1.png" />
        </a>
        <a href="/pages/youtube.html">
          <img src="/pictures/icons/Vector-2.png" />
        </a>
        <a href="/pages/instagram.html">
          <img src="/pictures/icons/Vector-3.png" />
        </a>
        <a href="./pages/shared/shared.html"> 공유버튼</a>
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define('tony-footer', Footer);
