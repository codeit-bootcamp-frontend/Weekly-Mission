class SearchBarComponent extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM 생성
    const shadow = this.attachShadow({ mode: "open" });

    // CSS 파일 적용
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute(
      "href",
      "/components/searchBar/search-bar-component.css"
    );
    shadow.appendChild(linkElem);

    const searchBarContainer = document.createElement("div");
    searchBarContainer.classList.add("search-wrap");

    const logoImage = document.createElement("img");
    logoImage.classList.add("search-lens-icon");
    logoImage.alt = "search-lens-icon";
    logoImage.src = "/static/imgs/search-bar-lens-icon.svg";

    const searchBarInput = document.createElement("input");
    searchBarInput.classList.add("search-bar-input");
    searchBarInput.placeholder = "원하는 링크를 검색해 보세요";

    // 자식 추가
    searchBarContainer.appendChild(logoImage);
    searchBarContainer.appendChild(searchBarInput);

    shadow.appendChild(searchBarContainer);
  }
}
customElements.define("search-bar", SearchBarComponent);
