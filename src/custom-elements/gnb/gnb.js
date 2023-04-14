export class Gnb extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
    this._isLoggedIn = false;
  }

  connectedCallback() {
    console.log("connected");
  }

  static get observedAttributes() {
    return ["isLoggedIn"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "isLoggedIn":
        this._isLoggedIn = newValue;
        break;
      default:
        break;
    }
    this.render();
  }

  get styles() {
    return `
    * {
      box-sizing: border-box;
    }
  
    #header-wrapper {
      width: 100%;
      max-width: 120rem;
      height: 5.813rem;
      padding: 1.25rem 12.5rem;
      margin: 0 auto;
      background-color: #f0f6ff;
    }
    
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    #login-btn {
      width: 8rem;
      height: 3.313rem;
      border-radius: 0.5rem;
      text-decoration: none;
      padding: 1rem 2.531rem;
      font-size: 1.125rem;
      font-weight: 600;
      color: #f5f5f5;
      background-image: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    }
    
    #logo img:hover {
      cursor: pointer;
    }
    
    @media only screen and (max-width: 1200px) {
      #header-wrapper {
        display: flex;
        justify-content: center;
        padding: 1.5rem 0;
      }
    
      nav {
        width: 49.028rem;
      }
    }
    
    @media only screen and (max-width: 868px) {
      #header-wrapper {
        padding: 1.5rem 2rem;
      }
    }
    
    @media only screen and (max-width: 767px) {
      #header-wrapper {
        width: 100%;
        height: 3.938rem;
        padding: 0.813rem 2rem;
        display: flex;
      }
    
      #logo img {
        width: 4.849rem;
        height: 0.875rem;
      }
    
      #login-btn {
        width: 5rem;
        height: 2.313rem;
        padding: 0.625rem 1.344rem;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.063rem;
      }
    }`;
  }

  render() {
    const style = document.createElement("style");
    style.textContent = this.styles;
    this.shadowRoot.appendChild(style);

    const template = document.createElement("template");
    template.innerHTML = this.template;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get template() {
    return `
      <div id="header-wrapper">
        <nav>
          <a id="logo" href="/">
            <img src="images/logo.svg" />
          </a>
          <a id="login-btn" href="signin.html"> 로그인 </a>
        </nav>
      </div>
    `;
  }
}

customElements.define("custom-gnb", Gnb);
