import ProcessData from "/scripts/ProcessData.js";

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
    // card 갯수가 0개일 때 에러가 뜸
    // const starElement = this.shadowRoot.querySelector(".star");
    // starElement.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   const classList = e.target.classList;
    //   if (classList.toggle("star-favor")) {
    //     e.target.src = "./images/purple-star.png";
    //     e.target.alt = "별(즐겨찾기)";
    //   } else {
    //     e.target.src = "./images/gray-star.png";
    //     e.target.alt = "별(일반)";
    //   }
    // });
  }

  async applyTemplate() {
    const cardsData = await linksData;
    const cardData = await cardsData[CustomCard.cardNum++];
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomCard.css");
      </style>
      <article class="card">
        <a href="${cardData.url}" target="_blank">
          <div class="image-container">
            <img
              class="card-image"
              src="${cardData.imageSource}"
              alt="${cardData.title}"
            />
            <img class="star" src="images/gray-star.png" alt="별(일반)" />
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
