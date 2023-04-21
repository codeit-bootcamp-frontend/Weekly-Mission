const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");
    @import url("/static/module/global-footer/global-footer.css");
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
          <img src="/static/img/facebook.png" alt="Facebook Icon" width="18">
        </a>
        <a href="https://twitter.com" target="blank">
          <img src="/static/img/twitter.png" alt="Twitter Icon" width="19">
        </a>
        <a href="https://youtube.com" target="blank">
          <img src="/static/img/youtube.png" alt="Youtube Icon" width="20">
        </a>
        <a href="https://instagram.com" target="blank">
          <img src="/static/img/Instagram.png" alt="Instagram Icon" width="17">
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
