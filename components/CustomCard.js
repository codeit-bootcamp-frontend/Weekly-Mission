import cardInfo from "/components/CardInfo.js";

class CustomCard extends HTMLElement {
  static cardNum = 0;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = this.getTemplate();
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/styles/CustomCard.css");
    this.shadowRoot.appendChild(linkElem);
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
      CustomCard.cardNum++;
    }

    const starElement = this.shadowRoot.querySelector(".star");
    starElement.addEventListener("click", (e) => {
      e.preventDefault();
      const classList = e.target.classList;
      if (classList.toggle("star-favor")) {
        e.target.src = "./images/purple-star.png";
        e.target.alt = "별(즐겨찾기)";
      } else {
        e.target.src = "./images/gray-star.png";
        e.target.alt = "별(일반)";
      }
    });
  }

  getData() {
    return cardInfo[CustomCard.cardNum];
  }

  getTemplate() {
    const cardData = this.getData();
    return `
      <article class="card">
        <a href="https://www.codeit.kr" target="_blank">
          <div class="image-container">
            <img
              class="card-image"
              src="${cardData.src}"
              alt="${cardData.alt}"
            />
            <img class="star" src="images/gray-star.png" alt="별(일반)" />
          </div>
          <div class="content-container">
            <div class="publish-time">${cardData.publishTime}</div>
            <button class="btn-overflow-menu"></button>
            <h2 class="content">
              ${cardData.content}
            </h2>
            <div class="publish-date">${cardData.publishDate}</div>
          </div>
        </a>
      </article>
    `;
  }
}

customElements.define("custom-card", CustomCard);
