const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");
    @import url("/static/module/search-bar/search-bar.css");
  </style>
  <div id="search-bar">
    <input type="search" id="search-input" placeholder="원하는 링크를 검색해 보세요">
    <img id="search-icon" src="/static/img/search-icon.png">
  </div>
`;

class searchBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("search-bar", searchBar);
