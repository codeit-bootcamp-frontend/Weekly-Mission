class CustomSearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomSearchBar.css");
      </style>
      <div class="search-container">
        <img class="search-icon" src="images/search.png" alt="검색 아이콘" />
        <input class="search-input" placeholder="원하는 링크를 검색해 보세요" />
      </div>`;
  }
}

customElements.define("custom-search-bar", CustomSearchBar);
