export class SearchBar extends HTMLElement {
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

      :host {
        display: block;
      }

	  form {
		position: relative;
	  }

      .search-icon-box {
		position: absolute;
		top: 1rem;
		left: 1rem;
        width: 1rem;
        height: 1rem;
      }

	  .search-icon-box img {
		display: block;
		width: 100%;
		height: auto;
	  }

	  .search-input {
		font-size: 1rem;
		line-height: 1.125rem;
		width: 100%;
		padding: 0.9375rem 2.635rem;
		border: none;
		background-color: #f5f5f5;
		border-radius: 10px;
	  }
    `;
  }

  /**
   * shadow root의 자식으로 추가될 템플릿
   */
  get template() {
    return `
      <form class="search-form" action="/search/links?q=null">
        <label>
          <div class="search-icon-box">
            <img src="/images/search-icon.png" alt="search icon" />
          </div>
          <input
            class="search-input"
            type="search"
            name="q"
            placeholder="원하는 링크를 검색해 보세요"
          />
        </label>
      </form>
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
}

customElements.define("custom-search-bar", SearchBar);
