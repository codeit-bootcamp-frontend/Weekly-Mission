export class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return `
      * {
        box-sizing: border-box;
      }

      #footer-wrapper {
        max-width: 120rem;
        margin: 0 auto;
        height: 10rem;
        padding-top: 2rem;
        padding-bottom: 6.75rem;
      }
	  
      .bottom-nav {
        display: flex;
        justify-content: space-between;
        margin: 0 6.5rem;
      }

      .bottom-nav > span {
        display: inline-block;
        font-size: 1rem;
        line-height: 1.15rem;
        font-weight: 400;
      }

      .bottom-nav > div {
        display: inline-block;
        font-size: 1rem;
        line-height: 1.15rem;
        font-weight: 400;
      }

      .bottom-nav > div#internal-links a#faq-link {
        margin-left: 1.875rem;
      }

      .bottom-nav a {
        color: white;
        text-decoration: none;
      }

      #copyright {
        color: #676767;
      }

      .iconbox img {
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.188rem;
      }

      @media only screen and (max-width: 767px) {
        #footer-wrapper {
          padding: 2rem;
        }

        .bottom-nav {
          position: relative;
          margin: auto;
        }

        .bottom-nav > div#internal-links a#faq-link {
          margin-left: 8vw;
        }

        #copyright {
          position: absolute;
          top: 3.75rem;
          left: 0;
        }

        .iconbox img {
          display: inline-block;
          vertical-align: middle;
          margin-left: 2vw;
        }
      }
    `;
  }

  render() {
    this.shadowRoot.innerHTML = "";

    const style = document.createElement("style");
    style.innerHTML = this.styles;
    this.shadowRoot.appendChild(style);

    const template = document.createElement("template");
    template.innerHTML = this.template;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /**
   * shadow root의 자식으로 추가될 템플릿
   */
  get template() {
    return `
	  <div id="footer-wrapper">
		<div class="bottom-nav">
		  <div id="copyright">codeit - 2023</div>
		  <div id="internal-links">
		    <div><a href="/privacy.html">Privacy Policy</a><a id="faq-link" href="/faq.html"">FAQ</a></div>
		  </div>
		  <div id="external-links">
		    <div class="iconbox">
			  <a href="https://www.facebook.com/" target="_blank">
			    <img src="images/facebook.svg" />
			  </a>
			  <a href="https://twitter.com/" target="_blank">
			    <img src="images/twitter.svg" />
			  </a>
			  <a href="https://www.youtube.com/" target="_blank">
			    <img src="images/youtube.svg" />
			  </a>
			  <a href="https://www.instagram.com/" target="_blank">
			    <img src="images/instagram.svg" />
			  </a>
			</div>
		  </div>
		</div>
	  </div>`;
  }
}

customElements.define("custom-footer", Footer);
