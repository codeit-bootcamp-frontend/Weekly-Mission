import ProcessData from "/scripts/ProcessData.js";
import CustomStar from "/components/CustomStar.js";

async function getData() {
  const processor = new ProcessData();
  const folderData = await processor.fetchFolderData();
  const linksData = await folderData.links;
  return linksData;
}
const linksData = getData();

class CustomCard extends HTMLElement {
  static cardNum = 0;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.applyTemplate();
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  async applyTemplate() {
    const cardsData = await linksData;
    const cardData = await cardsData[CustomCard.cardNum++];
    const cardImage = cardData.imageSource
      ? cardData.imageSource
      : "/images/logo.png";

    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomCard.css");
        .card-image {
          background-image: url("${cardImage}")
        }
      </style>
      <article class="card">
        <a href="${cardData.url}" target="_blank">
          <div class="image-container">
            <div class="card-image"></div>
            <custom-star></custom-star>
          </div>
          <div class="content-container">
            <div class="publish-time">${cardData.createdAt}</div>
            <button class="btn-overflow-menu"></button>
            <h2 class="content">
              ${cardData.description}
            </h2>
            <div class="publish-date">${cardData.createdAt}</div>
          </div>
        </a>
      </article>
    `;
  }
}

customElements.define("custom-card", CustomCard);
