class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });

    const inputContainer = document.createElement("div");
    inputContainer.setAttribute("class", "input-container");

    const searchImage = document.createElement("img");
    searchImage.setAttribute("src", "/images/search.svg");

    const input = document.createElement("input");
    input.setAttribute("type", "text");

    const placeholder = this.hasAttribute("data-placeholder") ? this.getAttribute("data-placeholder") : "원하는 정보를 검색하세요";
    input.setAttribute("placeholder", placeholder);

    const style = document.createElement("style");
    style.textContent = `
      @import "/static/css/main.css";
      
      .input-container {
        padding: 1.5rem 1.6rem;
        margin-bottom: 4rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: #f5f5f5;
        border-radius: 1rem;
      }

      .input-container input {
        width: 100%;
        font-size: 1.6rem;
        line-height: 1.8rem;
        background-color: inherit;
        border: none;
      }

      .input-container input::placeholder {
        color: #666666;
      }

      .input-container input:focus {
        outline: none;
      }

      @media (max-width: 1099px) {
        .input-container input {
          line-height: 2.4rem;
        }
      }

      @media (max-width: 767px) {
        .input-container {
          padding: 1.3rem 1.6rem;
          margin-bottom: 3.2rem;
        }
      
        .input-container input {
          font-size: 1.4rem;
          line-height: 1.671rem;
        }
      }
    `;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(inputContainer);
    inputContainer.appendChild(searchImage);
    inputContainer.appendChild(input);
  }
}

customElements.define("search-bar", SearchBar);
