class CustomCard extends HTMLElement {
  #cardData = null;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/components/Card/style.css" />
      <div class="card">
        <div class="card-image-container">
          <img class="card-image" src="/images/shared-card-images/yellow-dog.png" />
          <button class="star-button">
            <img class="star-icon" src="/images/default-star.svg" />
          </button>
        </div>
        <div class="text-box">
          <div class="text-content">
            <div class="card-info">
              <span class="added-time">10 minutes ago</span>
              <button class="kebab-button">
                <img src="/images/kebab.svg" />
              </button>
            </div>
            <p class="card-description">
              Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.
            </p>
            <span class="datetime">2023. 3. 15</span>
          </div>
        </div>
      </div>
      `;

    const starButton = this.shadowRoot.querySelector(".star-button");
    starButton.addEventListener("click", this.toggleStarIcon);

    const card = this.shadowRoot.querySelector(".card");
    card.addEventListener("click", this.openURL);
  }

  connectedCallback() {
    this.#cardData ? this.render() : null;
  }

  get cardData() {
    return this.#cardData;
  }

  set cardData(data) {
    if (data) {
      this.#cardData = data;
      this.render();
    }
  }

  render() {
    /* 받은 데이터가 없으면 기본값으로 설정 */
    const imageSrc = this.#cardData.imageSource ? this.#cardData.imageSource : "/images/shared-card-images/yellow-dog.png";
    const date = this.#cardData.createdAt ? this.getDateFormat(this.#cardData.createdAt) : "2023. 3. 15";
    const diffDate = this.#cardData.createdAt ? this.getTimeDiffFormat(this.#cardData.createdAt) : "10 minutes ago";
    const description = this.#cardData.description
      ? this.#cardData.description
      : "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.";
    const url = this.#cardData.url ? this.#cardData.url : "https://www.codeit.kr/";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/static/css/reset.css" />
      <link rel="stylesheet" href="/components/Card/style.css" />
      <div class="card">
        <div class="card-image-container">
          <img class="card-image" src=${imageSrc} />
          <button class="star-button">
            <img class="star-icon" src="/images/default-star.svg" />
          </button>
        </div>
        <div class="text-box">
          <div class="text-content">
            <div class="card-info">
              <span class="added-time">${diffDate}</span>
              <button class="kebab-button">
                <img src="/images/kebab.svg" />
              </button>
            </div>
            <p class="card-description">${description}</p>
            <span class="datetime">${date}</span>
          </div>
        </div>
      </div>
    `;

    const starButton = this.shadowRoot.querySelector(".star-button");
    starButton.addEventListener("click", this.toggleStarIcon);

    const card = this.shadowRoot.querySelector(".card");
    card.addEventListener("click", () => {
      this.openURL(url);
    });
  }

  getTimeDiffFormat(dateString) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(5, 7);
    const day = dateString.slice(8, 10);

    const now = new Date();
    const createdDate = new Date(year, month - "1", day);

    const diffMSec = now.getTime() - createdDate.getTime();
    const diffMin = diffMSec / (60 * 1000);
    const diffHour = diffMin / 60;
    const diffDay = diffHour / 24;
    const diffMonth = diffDay / 30;
    const diffYear = diffMonth / 12;

    if (diffYear >= 1) {
      const diffDate = Math.floor(diffYear);
      return diffYear >= 2 ? diffDate + ` years ago` : diffDate + ` year ago`;
    }

    if (diffMonth >= 1) {
      const diffDate = Math.floor(diffMonth);
      return diffMonth >= 2 ? diffDate + ` months ago` : diffDate + ` month ago`;
    }

    if (diffDay >= 1) {
      const diffDate = Math.floor(diffDay);
      return diffDate >= 2 ? diffDate + ` days ago` : diffDate + ` day ago`;
    }

    if (diffHour >= 1) {
      const diffDate = Math.floor(diffHour);
      return diffHour >= 2 ? diffDate + ` hours ago` : diffDate + ` hour ago`;
    }

    if (diffMin >= 1) {
      const diffDate = Math.floor(diffMin);
      return diffMin >= 2 ? diffDate + ` minutes ago` : diffDate + ` minute ago`;
    }
  }

  getDateFormat(dateString) {
    const year = dateString.slice(0, 4);
    const month = dateString[5] === "0" ? dateString.slice(6, 7) : dateString.slice(5, 7);
    const day = dateString[8] === "0" ? dateString.slice(9, 10) : dateString.slice(8, 10);
    return `${year}. ${month}. ${day}`;
  }

  openURL(url) {
    window.open(url);
  }

  toggleStarIcon(e) {
    e.stopPropagation();
    if (e.target.classList.contains("selected-star")) {
      e.target.classList.remove("selected-star");
      e.target.src = "/images/default-star.svg";
    } else {
      e.target.classList.add("selected-star");
      e.target.src = "/images/selected-star.svg";
    }
  }
}

customElements.define("custom-card", CustomCard);
