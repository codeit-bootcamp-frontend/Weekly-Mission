class FooterComponent extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM 생성
    const shadowRoot = this.attachShadow({ mode: "open" });
    // 템플릿 생성
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @import url("./css/reset.css");
        .footer {
          background-color: var(--black);
        }
        .footer .container {
          display: flex;
          justify-content: space-between;
          align-items: start;
          height: 160px;
          padding: 30px 104px 0;
        }
        .copyright {
          color: #676767;
        }
        .info {
          color: #cfcfcf;
        }
        .icons {
          display: flex;
        }
        .icon {
          width: 18px;
          height: 18px;
          margin-left: 13px;
          display: flex;
          align-items: center;
        }
        @media (max-width: 767px) {
          .footer .container {
            position: relative;
            padding: 32px;
          }
          .copyright {
            position: absolute;
            bottom: 32px;
            left: 32px;
          }
          .info {
            width: 100%;
            display: flex;
          }
          .FAQ {
            margin: 0 auto;
          }
        }
        @media (max-width: 375px){
          .footer {
            width: 375px;
          }
        }
      </style>
      <footer class="footer">
        <div class="container">
          <div class="copyright">©codeit - 2023</div>
          <div class="info">
            <a href="./privacy.html" class="policy">Privacy Policy</a>
            <a href="./faq.html" class="FAQ">FAQ</a>
          </div>
          <div class="icons">
            <a href="https://ko-kr.facebook.com/" class="icon facebook"
              ><img src="/img/페이스북.png" alt="facebook"
            /></a>
            <a href="https://twitter.com/?lang=ko" class="icon twitter"
              ><img src="/img/트위터.png" alt="twitter"
            /></a>
            <a href="https://www.youtube.com/" class="icon youtube"
              ><img src="/img/유튜브.png" alt="youtube"
            /></a>
            <a href="https://www.instagram.com/" class="icon instagram"
              ><img src="/img/인스타그램.png" alt="instagram"
            /></a>
          </div>
        </div>
      </footer>
    `;
    // Shadow DOM에 템플릿 추가
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Custom Element 등록
window.customElements.define("footer-component", FooterComponent);
