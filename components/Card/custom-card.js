class CustomCard extends HTMLElement {
  #cardData = null;

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
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
    /* #cardData 프로퍼티에 원하는 데이터들이 있는지 확인 */
    const imageSrc = this.#cardData.imageSource ? this.#cardData.imageSource : "/images/shared-card-images/yellow-dog.png";
    const date = this.createdDate();
    const diffDate = this.addedTimeFormat();
    const description = this.#cardData.description
      ? this.#cardData.description
      : "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.";

    this.shadowRoot.innerHTML = `
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
    card.addEventListener("click", this.openURL);
  }

  addedTimeFormat() {
    const createdAt = this.#cardData?.createdAt;

    if (!createdAt) {
      return "10 minute ago";
    } else {
      const year = createdAt.slice(0, 4);
      const month = createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7);
      const day = createdAt.slice(8, 10);

      const now = new Date();
      const createdDate = new Date(year, month - "1", day);

      const diffMSec = now.getTime() - createdDate.getTime();

      /* 1. 분 단위로 나누기 */
      const diffMin = diffMSec / (60 * 1000);
      if (diffMin < 2) {
        return `1 minute ago`;
      } else if (diffMin <= 59) {
        return `${Math.floor(diffMin)} minute ago`;
      } else {
        /* 2. hour 단위 */
        const diffHour = diffMin / 60;
        if (Math.floor(diffHour) === 1) {
          return `1 hour ago`;
        } else if (diffHour < 24) {
          return `${Math.floor(diffHour)} hours ago`;
        } else if (diffHour < 48) {
          return `1 day ago`;
        } else {
          /* 3. days 단위 */
          const diffDay = diffHour / 24;
          if (diffDay <= 30) {
            return `${Math.floor(diffDay)} days ago`;
          } else if (diffDay < 60) {
            return `1 month ago`;
          } else {
            /* 4. 월 단위 */
            const diffMonth = diffDay / 30;
            if (diffMonth <= 11) {
              return `${Math.floor(diffMonth)} months ago`;
            } else if (diffMonth < 24) {
              return `1 year ago`;
            } else {
              /* 5. 연 단위 */
              const diffYear = diffMonth / 12;
              return `${Math.floor(diffYear)} years ago`;
            }
          }
        }
      }
    }
  }

  createdDate() {
    const createdAt = this.#cardData.createdAt;
    if (!createdAt) {
      return "2023. 3. 15";
    } else {
      const year = createdAt.slice(0, 4);
      const month = createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7);
      const day = createdAt.slice(8, 10);
      return `${year}. ${month}. ${day}`;
    }
  }

  /* 이벤트 핸들러 */
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

  openURL() {
    const url = this.#cardData.url ? this.#cardData.url : "https://www.codeit.kr";
    window.open(url);
  }
}

customElements.define("custom-card", CustomCard);
