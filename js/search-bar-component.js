class SearchBar extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM 생성
    const shadowRoot = this.attachShadow({ mode: "open" });
    // 템플릿 생성
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @import url("./css/reset.css");
        .search-bar {
          display: flex;
          align-items: center;
          position: relative;
        }
        .search-bar input {
          width: 100%;
          height: 48px;
          background-color: #F5F5F5;
          border-radius: 10px;
          padding: 0 42px;
        }
        .search-bar input:focus {
          outline: none;
        }
        .search-icon {
          width: 12px;
          position: absolute;
          left: 15px;
        }
      </style>
      <div class="search-bar">
        <img src="./img/Search.png" alt="search" class="search-icon">
        <input type="text" placeholder="원하는 링크를 검색해 보세요">
      </div>  
    `;
    // Shadow DOM에 템플릿 추가
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Custom Element 등록
window.customElements.define("search-bar", SearchBar);
