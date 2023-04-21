const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");
    @import url("/static/module/link-card/link-card.css");
  </style>
  <div class="card">
    <a id="card-url" target="_blank">
      <div id="card-image"></div>
      <div class="card-text">
        <div class="first-line">
          <p id="since"></p>
          <div class="eclipse-container">
            <img class="eclipse" src="/static/img/eclipse.png" alt="eclipse" width="3">
            <img class="eclipse" src="/static/img/eclipse.png" alt="eclipse" width="3">
            <img class="eclipse" src="/static/img/eclipse.png" alt="eclipse" width="3">
          </div>
        </div>
        <p id="description"></p>
        <p id="createdAt"></p>
      </div>
    </a>
    <bookmark-icon bookmark="false"></bookmark-icon>
  </div>
`;

class Card extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    const backgroundImg = this.getAttribute("imageSource");
    this.shadowRoot.getElementById("card-url").href = this.getAttribute("card-url");
    this.shadowRoot.getElementById("card-image").style.backgroundImage = `url(${backgroundImg})`;
    this.shadowRoot.getElementById("since").innerText = this.getAttribute("since");
    this.shadowRoot.getElementById("description").innerText = this.getAttribute("description");
    this.shadowRoot.getElementById("createdAt").innerText = this.getAttribute("createdAt");
  }
}

customElements.define("link-card", Card);
