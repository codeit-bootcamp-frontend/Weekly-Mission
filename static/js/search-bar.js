const template = document.createElement("template");
template.innerHTML = `
  <style>
    #search-bar {
      position: relative;
      width: 106rem;
      margin: 0 auto;
      font-family: 'Pretendard';
      font-size: 1.6rem;
    }
    
    #search-bar #search-input {
      width: 100%;
      border: 0;
      border-radius: 1rem;
      outline-color: var(--primary);
      padding: 1.5rem 4.2rem;
      color: var(--search-bar-text);
      background-color: var(--gray6);
    }
    
    #search-bar #search-icon {
      position: absolute;
      top: 1.4rem;
      left: 1.6rem;
      width: 1.6rem;
    }

    @media (min-width: 768px) and (max-width: 1099px) {
      #search-bar {
        width: 70.4rem;
      }
    }
    
    @media (max-width: 767px) {
      #search-bar {
        max-width: 32.5rem;
        width: 100%;
      }

      #search-bar #search-input {
        padding: 1.3rem 3.8rem;
        font-size: 1.4rem;
      }

      #search-bar #search-icon {
        top: 1.3rem;
      }
    }
  </style>
  <div id="search-bar">
    <input type="search" id="search-input" placeholder="원하는 링크를 검색해 보세요">
    <img id="search-icon" src="/static/search-icon.png">
  </div>
`;

class searchBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define("search-bar", searchBar);
