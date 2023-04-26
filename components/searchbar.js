class SearchBar extends HTMLElement {
  constructor() {
    super();
    
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
      input {
          display: block;
          box-sizing: border-box;
          margin: 0 auto;
          width: 100%;
          padding: 15px 0px 15px 42px;
          border-radius: 10px;
          border: none;
          font-size: 16px;
          background-color: #F5F5F5;
          background-image: url('../images/components/search.png');
          background-repeat: no-repeat;
          background-position: 17.85px center;
        }

      input:focus {
        outline: none;
      }
      </style>

      <input type="text" placeholder="원하는 링크를 검색해 보세요.">

      
    `;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.input = shadowRoot.querySelector("input");
    this.input.addEventListener('focusin', (e) => {
      e.preventDefault();
    })
  }

  
}

customElements.define('search-bar', SearchBar);
