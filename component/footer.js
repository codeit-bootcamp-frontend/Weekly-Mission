class Myfooter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
  <style>
    /* footer 시작 */
    footer {
      
      background-color: #111322;
      padding: 32px 104px 108px;
    }

    .footer-items {
      display: flex;
      height: 20px;
      justify-content: space-between;
      align-items: center;
    }

    .company-name {
      color: #676767;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
    }

    .footer-center a {
      color: #cfcfcf;
      font-family: Arial, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      text-decoration: none;
    }
    .footer-right {
      display: flex;
      gap: 12px;
    }
    .footer-center a:first-child {
      margin-right: 30px;
    }

    .mobile {
      display: none;
    }

    @media screen and (min-width: 768px) and (max-width: 1199px) {
      footer {
        
        padding: 32px 104px 108px;
      }
    }

    /* Mobile */
    @media screen and (min-width: 375px) and (max-width: 767px) {
      footer {
        height: 160px;
        padding: 32px;
        box-sizing: border-box;
      }

      .desktop {
        display: none;
      }

      .mobile {
        display: flex;
        flex-direction: column;
        gap: 60px;

      .footer-items.mobile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 96px;
      
      }

      .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
      }
      .footer-center a:first-child {
        margin: 0px;
      }

      .footer-right {
        align-items: center;
      }

      .company-name {
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }
    }
  </style>

  <footer>
    <div class="footer-items desktop">
      <div class="company-name">©codeit - 2023</div>

      <div class="footer-center">
        <a href="privacy/privacy.html">Privacy Policy</a>
        <a href="faq/faq.html">FAQ</a>s
      </div>

      <div class="footer-right">
        <a href="https://ko-kr.facebook.com/"
          ><img src="public/facebook.png" alt="Facebook"
        /></a>
        <a href="https://twitter.com/?lang=ko">
          <img src="public/twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.youtube.com/">
          <img src="public/youtube.png" alt="Youtube" />
        </a>
        <a href="https://www.instagram.com/"
          ><img src="public/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
    <div class="footer-items mobile">
      <div class="footer-top">
        <div class="footer-center">
          <a href="privacy/privacy.html">Privacy Policy</a>
        </div>

        <div class="footer-center"><a href="faq/faq.html">FAQ</a></div>

        <div class="footer-right">
          <a href="https://ko-kr.facebook.com/"
            ><img src="public/facebook.png" alt="Facebook"
          /></a>
          <a href="https://twitter.com/?lang=ko">
            <img src="public/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/">
            <img src="public/youtube.png" alt="Youtube" />
          </a>
          <a href="https://www.instagram.com/"
            ><img src="public/instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
      <div class="company-name">©codeit - 2023</div>
    </div>
  </footer>
`;
  }
}

customElements.define("my-footer", Myfooter);
