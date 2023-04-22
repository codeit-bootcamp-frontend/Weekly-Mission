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

    const createdDate = Intl.DateTimeFormat("kr").format(
      new Date(cardData.createdAt)
    );
    const passedTime = this.calculatePassedTime(new Date(cardData.createdAt));
    const cardImage = cardData.imageSource
      ? cardData.imageSource
      : "/images/default-background.png";

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
            <div class="passed-time">${passedTime}</div>
            <button class="btn-overflow-menu"></button>
            <h2 class="content">
              ${cardData.description}
            </h2>
            <div class="created-date">${createdDate}</div>
          </div>
        </a>
      </article>
    `;
  }

  calculatePassedTime(createdTime) {
    const MINUTE = 60 * 1000;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    const MONTH = 31 * DAY;
    const YEAR = 12 * MONTH;

    const currentTime = new Date();
    const timeDiff = currentTime - createdTime;

    if (timeDiff < 2 * MINUTE) {
      return "1 minute ago";
    } else if (timeDiff < HOUR) {
      return `${Math.floor(timeDiff / MINUTE)} minutes ago`;
    } else if (timeDiff < 2 * HOUR) {
      return "1 hour ago";
    } else if (timeDiff < DAY) {
      return `${Math.floor(timeDiff / HOUR)} hours ago`;
    } else if (timeDiff < 2 * DAY) {
      return "1 day ago";
    } else if (timeDiff < MONTH) {
      return `${Math.floor(timeDiff / DAY)} days ago`;
    } else if (timeDiff < 2 * MONTH) {
      return "1 month ago";
    } else if (timeDiff < YEAR) {
      return `${Math.floor(timeDiff / MONTH)} months ago`;
    } else if (timeDiff < 2 * YEAR) {
      return "1 year ago";
    } else {
      return `${Math.floor(timeDiff / YEAR)} years ago`;
    }
  }
}

customElements.define("custom-card", CustomCard);
