class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <section class="search-container">
      <img class="search-icon" src="images/search.png" alt="검색 아이콘" />
      <input class="search-input" placeholder="원하는 링크를 검색해 보세요" />
    </section>

    <style>
      * {
        box-sizing: border-box;
      }

      .search-container {
        width: 106rem;
        height: 4.8rem;
        margin: 4rem auto;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-radius: 1rem;
        background-color: #f5f5f5;
      }
      
      .search-icon {
        width: 1.6rem;
        height: 1.6rem;
      }
      
      .search-input {
        width: 100%;
        padding: 0;
        color: #666666;
        font-family: "Pretendard", sans-serif;
        font-weight: 400;
        border-style: none;
        outline: none;
        background-color: transparent;
      }

      @media (max-width: 1100px) {
        .search-container {
          width: 70.4rem;
          height: 5.4rem;
        }
      }

      @media (max-width: 768px) {
        .search-container {
          width: 32.5rem;
          height: 4.3rem;
          margin: 2rem auto;
          gap: 0.6rem;
        }
      }
    </style>
    `;
  }
}

customElements.define("search-bar", SearchBar);
