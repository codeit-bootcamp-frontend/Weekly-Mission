class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = this.getTemplate();
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "./styles/SearchBar.css");
    this.shadowRoot.appendChild(linkElem);
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  getTemplate() {
    return `
      <section class="search-container">
        <img class="search-icon" src="images/search.png" alt="검색 아이콘" />
        <input class="search-input" placeholder="원하는 링크를 검색해 보세요" />
      </section>
    `;
  }
}

customElements.define("search-bar", SearchBar);
