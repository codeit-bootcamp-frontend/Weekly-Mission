class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        input {
          width: 100%;
          height: 54px;
          color: #F5F5F5;
          border: none;
          background: url('/pictures/Search.png') #f5f5f5 no-repeat scroll 7px 20px;
          padding-left:30px;
        }
     
      </style>
      <input placeholder="원하는 링크를 입력하세요"/>
    `;
  }
}

customElements.define('tony-searchbar', SearchBar);
