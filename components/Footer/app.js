export default class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
      <div class="copyright">©codeit - 2023</div>
      <div class="policy">
        <a href="/pages/privacy" class="privacy">Privacy Policy</a>
        <a href="/pages/faq" class="faq">FAQ</a>
      </div>
      <div class="sns">
        <a href="https://www.facebook.com/" class="facebook">
          <img src="/static/public/facebook-icon.svg" alt="Facebook Icon" />
        </a>
        <a href="https://twitter.com/?lang=ko" class="twitter">
          <img src="/static/public/twitter-icon.svg" alt="Twitter Icon" />
        </a>
        <a href="https://www.youtube.com/" class="youtube">
          <img src="/static/public/youtube-icon.svg" alt="Youtube Icon" />
        </a>
        <a href="https://www.instagram.com/" class="instagram">
          <img src="/static/public/instagram-icon.svg" alt="Instagram Icon" />
        </a>
      </div>
      <style>
      .copyright {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: #676767;
      }
      .policy {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: #cfcfcf;
        display: flex;
        gap: 3rem;
      }
      .policy a {
        text-decoration-line: none;
      }
      .policy .privacy:link,
      .policy .privacy:active,
      .policy .privacy:hover,
      .policy .privacy:visited,
      .policy .faq:link,
      .policy .faq:active,
      .policy .faq:hover,
      .policy .faq:visited {
        color: #cfcfcf;
      }
      .sns {
        display: flex;
        gap: 1.23rem;
        justify-content: center;
        align-items: center;
        height: 1.8rem;
      }
      .sns a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 767px){
        .copyright {
          position: absolute;
          top: 78px;
          left: 0;
      }
  }
      </style>
    `;
  }
}

customElements.define("footer-component", Footer);
