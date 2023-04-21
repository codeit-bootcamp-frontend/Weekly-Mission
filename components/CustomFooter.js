class CustomFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomFooter.css");
      </style>
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
    `;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}

customElements.define("custom-footer", CustomFooter);
