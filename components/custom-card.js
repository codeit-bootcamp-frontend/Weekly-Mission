class CustomCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    /* 입력받은 data-* 속성값을 적용 */
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./style.css">
    <style>
      .card {
        width: 34rem;
        position: relative;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        transition: all 0.3s linear; /* card 배경색 애니메이션 */
      }
      
      .card:hover {
        background-color: var(--gray-f);
      }
      
      /* card hover시 card image 1.2배 확대 */
      .card:hover .card-image {
        transform: scale(1.2);
      }
      
      .card-image-container {
        overflow: hidden;
      }
      
      .card-image {
        display: block;
        width: 100%;
        transition: all 0.5s linear; /* card image 애니메이션 */
      }
      
      .card .star-button {
        border: none;
        background: transparent;
        cursor: pointer;
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
      }
      
      .text-content {
        padding: 1.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      
      .card-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .card-info .added-time {
        color: #666666;
        font-size: 1.3rem;
      }
      
      .card-info .kebab-button {
        border: none;
        cursor: pointer;
        background: transparent;
      }
      
      .card-description {
        /* text-overflow: ellipsis; */
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.4rem;
      }
      
      .datetime {
        color: #333333;
        font-size: 1.5rem;
      }

      @media (max-width: 767px) {
        .card {
          max-width: 32.5rem;
        }
      }
    </style>
    <div class="card">
      <div class="card-image-container">
        <img class="card-image" src=${this.getAttribute("data-imageSource")} />
        <button class="star-button">
          <img class="star-icon" src="/images/default-star.svg" />
        </button>
      </div>
      <div class="text-box">
        <div class="text-content">
          <div class="card-info">
            <span class="added-time">${this.getAttribute("data-addedTime")}</span>
            <button class="kebab-button">
              <img src="/images/kebab.svg" />
            </button>
          </div>
          <p class="card-description">
            ${this.getAttribute("data-description")}
          </p>
          <span class="datetime">${this.getAttribute("data-datetime")}</span>
        </div>
      </div>
    </div>
    `;

    const stars = shadowRoot.querySelectorAll(".star-icon");

    stars.forEach((star) => {
      star.addEventListener("click", this.toggleStarIcon);
    });

    const cards = shadowRoot.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("click", this.openCodeitPage);
    });
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

  openCodeitPage() {
    window.open("https://www.codeit.kr");
  }
}

customElements.define("custom-card", CustomCard);
