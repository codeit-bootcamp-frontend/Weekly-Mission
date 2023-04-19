class SearchBarComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  createLinkElem() {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute(
      "href",
      "/components/searchBar/search-bar-component.css"
    );
    return linkElem;
  }

  createSearchBarContainer() {
    const searchBarContainer = document.createElement("div");
    searchBarContainer.classList.add("search-wrap");
    const logoImage = this.createLogoImage();
    const searchBarInput = this.createSearchBarInput();

    searchBarContainer.appendChild(logoImage);
    searchBarContainer.appendChild(searchBarInput);

    return searchBarContainer;
  }

  createLogoImage() {
    const logoImage = document.createElement("img");
    logoImage.classList.add("search-lens-icon");
    logoImage.alt = "search-lens-icon";
    logoImage.src = "/static/imgs/search-bar-lens-icon.svg";
    return logoImage;
  }

  createSearchBarInput() {
    const searchBarInput = document.createElement("input");
    searchBarInput.classList.add("search-bar-input");
    searchBarInput.placeholder = "원하는 링크를 검색해 보세요";
    return searchBarInput;
  }

  render() {
    const linkElem = this.createLinkElem();
    const searchBarContainer = this.createSearchBarContainer();

    this.shadowRoot.appendChild(linkElem);
    this.shadowRoot.appendChild(searchBarContainer);
  }
}

customElements.define("search-bar", SearchBarComponent);
