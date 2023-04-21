const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");

    p {
      margin: 0;
    }

    #card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 1.5rem;
      overflow: hidden;
      width: 34rem;
      height: 33.4rem;
      background-color: var(--white);
      filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.08));
    }

    #card #card-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 20rem;
    }

    #card #card-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem 2rem;
    }

    #card-text #first-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #first-line #since {
      font-size: 1.4rem;
      color: var(--card-since);
    }

    #first-line #eclipse-container {
      display: flex;
      justify-content: space-between;
      width: 1.9rem;
    }

    #card-text #description {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 29.5rem;
      line-height: 150%;
      font-weight: 500;
      color: black;
    }

    #card-text #createdAt {
      font-size: 1.4rem;
      color: var(--card-date);
    }
    
    @media (hover: hover) {
      #card:hover {
        background-color: var(--gray5);
      }
      
      #card:hover #card-image {
        background-size: 120%;
      }
    }
  </style>
  <div id="card">
    <a id="card-url" target="_blank">
      <div id="card-image"></div>
      <div id="card-text">
        <div id="first-line">
          <p id="since"></p>
          <div id="eclipse-container">
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
    this.shadowRoot.getElementById("card-image").style.backgroundImage = `url(${backgroundImg})`;
    this.shadowRoot.getElementById("since").innerText = this.getAttribute("since");
    this.shadowRoot.getElementById("description").innerText = this.getAttribute("description");
    this.shadowRoot.getElementById("createdAt").innerText = this.getAttribute("createdAt");
    this.shadowRoot.getElementById("card-url").href = this.getAttribute("card-url");
  }
}

customElements.define("link-card", Card);
