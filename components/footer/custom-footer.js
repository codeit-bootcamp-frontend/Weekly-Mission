class CustomFooter extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/components/footer/style.css" />
      <footer>
        <div class="corporation">©codeit - 2023</div>
        <ul class="more-information">
          <li><a href="/privacy/">Privacy Policy</a></li>
          <li><a href="/faq/">FAQ</a></li>
        </ul>
        <ul class="sns-container">
          <li>
            <a href="https://facebook.com/" target="_blank"><img src="/images/facebook.svg" /></a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank"><img src="/images/twitter.svg" /></a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank"><img src="/images/youtube.svg" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank"><img src="/images/instagram.svg" /></a>
          </li>
        </ul>
      </footer>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
