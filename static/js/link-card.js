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
      background-color: var(--white);
      box-shadow: 0 0.5rem 2.5rem rgba(0, 0, 0, 0.08);
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
    }

    #card-text #date {
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
    <div id="card-image"></div>
    <div id="card-text">
      <div id="first-line">
        <p id="since">10분 전</p>
        <div id="eclipse-container">
          <img class="eclipse" src="/static/eclipse.png" alt="eclipse" width="3">
          <img class="eclipse" src="/static/eclipse.png" alt="eclipse" width="3">
          <img class="eclipse" src="/static/eclipse.png" alt="eclipse" width="3">
        </div>
      </div>
      <p id="description"></p>
      <p id="createdAt"></p>
    </div>
    <bookmark-icon bookmark="false"></bookmark-icon>
  </div>
`;

class Card extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    const backgroundImg = this.getAttribute("image");
    this.shadowRoot.getElementById("card-image").style.backgroundImage = `url(${backgroundImg})`;
    this.shadowRoot.getElementById("since").innerText = this.getAttribute("since");
    this.shadowRoot.getElementById("description").innerText = this.getAttribute("description");
    this.shadowRoot.getElementById("createdAt").innerText = this.getAttribute("createdAt");

    const card = this.shadowRoot.getElementById("card");
    card.addEventListener('click', () => window.open('https://www.codeit.kr'));
  }
}

customElements.define("link-card", Card);
