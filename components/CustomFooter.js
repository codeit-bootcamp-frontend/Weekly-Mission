class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <footer>
      <div class="footer-logo">©codeit - 2023</div>
      <div class="box-privacy-and-faq">
        <a href="/privacy.html"><div>Privacy Policy</div></a>
        <a href="/faq.html"><div>FAQ</div></a>
      </div>
      <div class="box-sns">
        <a href="https://www.facebook.com/" target="_blank"
          ><img
            class="img-sns-logo"
            src="images/sns-logo-facebook.png"
            alt="페이스북로고"
        /></a>
        <a href="https://twitter.com/" target="_blank"
          ><img
            class="img-sns-logo"
            src="images/sns-logo-twitter.png"
            alt="트위터로고"
        /></a>
        <a href="https://www.youtube.com/" target="_blank"
          ><img
            class="img-sns-logo"
            src="images/sns-logo-youtube.png"
            alt="유튜브로고"
        /></a>
        <a href="https://www.instagram.com/" target="_blank"
          ><img
            class="img-sns-logo"
            src="images/sns-logo-instagram.png"
            alt="인스타그램로고"
        /></a>
      </div>
    </footer>
    
    <style>
      * {
        box-sizing: border-box;
      }

      footer {
        height: 16rem;
        padding: 3.2rem 10.4rem;
        display: flex;
        justify-content: space-between;
        font-family: "Arial", sans-serif;
        line-height: 1.6rem;
        background-color: var(--black);
      }
      
      .footer-logo {
        color: #676767;
      }
      
      .box-privacy-and-faq {
        width: 18.111rem;
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
      }
      
      .box-privacy-and-faq > a {
        color: #cfcfcf;
        text-decoration: none;
      }
      
      .box-sns {
        width: 11.6rem;
        height: 1.8rem;
        display: flex;
        justify-content: space-between;
      }
      
      .img-sns-logo {
        width: 1.8rem;
        height: 1.8rem;
      }
      
      @media (max-width: 768px) {
        footer {
          padding: 3.2rem 3.2rem;
          position: relative;
        }
      
        .footer-logo {
          position: absolute;
          bottom: 3.2rem;
          left: 3.2rem;
        }
      }
    </style>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
