const template = document.createElement("template");
template.innerHTML = `
  <style>
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    height: 1.8rem;
  }
  
  #site-footer {
    background: var(--black);
    font-family: "Arial";
    width: 100vw;
    height: 16rem;
  }
  
  #site-footer #footer-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 3.2rem 10.4rem 3.2rem;
    max-width: 1920px;
    height: 16rem;
  }
  
  #footer-container .footer-contents:first-child {
    color: var(--footer-text1);
  }
  
  #footer-container .footer-contents:nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 16.3rem;
  }
  
  #footer-container .footer-contents:nth-child(2) a {
    color: var(--footer-text2);
  }
  
  #footer-container .icon-box {
    display: flex;
    justify-content: space-between;
    width: 11.6rem;
  }
  
  @media (max-width: 767px) {
    #site-footer {
      padding: 0 3.2rem;
    }
    #site-footer #footer-container {
      flex-wrap: wrap;
      align-content: space-between;
      padding: 3.2rem 0;
    }
  
    #footer-container .footer-contents:first-child {
      width: 100%;
      order: 1;
    }
  }
  </style>
  <footer id="site-footer">
    <div id="footer-container">
      <div class="footer-contents">
        @codeit-2023
      </div>
      <div class="footer-contents">
        <a href="/privacy">Privacy Policy</a>
        <a href="/faq">FAQ</a>
      </div>
      <div class="footer-contents icon-box">
        <a href="https://facebook.com" target="blank">
          <img src="/static/facebook.png" alt="Facebook Icon" width="18">
        </a>
        <a href="https://twitter.com" target="blank">
          <img src="/static/twitter.png" alt="Twitter Icon" width="19">
        </a>
        <a href="https://youtube.com" target="blank">
          <img src="/static/youtube.png" alt="Youtube Icon" width="20">
        </a>
        <a href="https://Melon.com" target="blank">
          <img src="/static/Instagram.png" alt="Instagram Icon" width="17">
        </a>
      </div>
    </div>
  </footer>
`;

class Gft extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("global-footer", Gft);
