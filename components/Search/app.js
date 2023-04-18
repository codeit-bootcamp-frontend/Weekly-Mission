export default class Search extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
      <div class="search">
        <div class="search-icon">
          <img src="/static/public/search-icon.svg" alt="Search Icon" />
        </div>
        <div class="search-input">
          <input class="input" type="text" placeholder="원하는 링크를 검색해 보세요." />
        </div>
      </div>
      <style>
        .search {
          max-width: 1060px;
          margin: 0 auto;
          width: 100%;
          height: 48px;
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          gap: 12px;
          align-items: center;
          background: #F5F5F5;
          border-radius: 10px;
        }
        .search .search-icon {
          width: 12px;
          margin-left: 18px;
        }
        .search .search-icon img {
          width: 100%;
          height: auto;
          display: block;
        }
        .search .search-input {
          width: 100%;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: left;
          color: #666666;
        }
        .search .search-input input {
          margin: 0;
          padding: 0;
          width: 100%;
          height: auto;
          display: block;
          border: none;
          background: transparent;
        }
        .search .search-input input:focus {
          outline: none;
        }
      </style>
    `;
  }

  disconnectedCallback() {
    this.attachShadow({ mode: "closed" });
    this.shadowRoot.innerHTML = ``;
  }
}

customElements.define("search-component", Search);
