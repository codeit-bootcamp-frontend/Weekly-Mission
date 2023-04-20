import { StarComponent } from "../star/starComponent.js";
export class CardComponent extends HTMLElement {
  #prop = null;
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });

    // CSS
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/card/card-component.css");
    this.shadow.appendChild(linkElem);
  }

  get prop() {
    return this.#prop;
  }

  set prop(newProp) {
    // 타입체킹 로직 추후 추가
    if (typeof newProp !== "object" && newProp !== null) {
      console.warn("올바르지 않은 형식의 데이터가 들어왔습니다.");
      return;
    }
    if (
      typeof newProp.imageSrc !== "string" ||
      typeof newProp.description !== "string" ||
      typeof newProp.date !== "string" ||
      typeof newProp.url !== "string"
    ) {
      console.warn("올바르지 않은 형식의 데이터가 들어왔습니다.");
      return;
    }
    this.#prop = newProp;
  }

  connectedCallback() {
    // 카드 데이터
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = this.prop.imageSrc;

    const starIcon = new StarComponent();
    starIcon.classList.add("star-icon");

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const cardInfoHead = document.createElement("div");
    cardInfoHead.classList.add("card-info-head");

    const cardUpdateTime = document.createElement("div");
    cardUpdateTime.classList.add("card-update-time");
    cardUpdateTime.textContent = this._updateTime;

    const kebabIcon = document.createElement("img");
    kebabIcon.classList.add("kebab-icon");
    kebabIcon.src = "/static/imgs/kebab.svg";

    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = this.prop.description;

    const cardDate = document.createElement("div");
    cardDate.classList.add("card-date");
    cardDate.textContent = this.parseDate(this.prop.date);

    cardInfoHead.appendChild(cardUpdateTime);
    cardInfoHead.appendChild(kebabIcon);

    cardInfo.appendChild(cardInfoHead);
    cardInfo.appendChild(cardDescription);
    cardInfo.appendChild(cardDate);

    cardContainer.appendChild(starIcon);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardInfo);

    this.shadow.appendChild(cardContainer);

    //hover 이벤트 핸들러 등록
    cardContainer.addEventListener(
      "mouseover",
      this.handleMouseOver.bind(this)
    );
    cardContainer.addEventListener("mouseout", this.handleMouseOut.bind(this));

    cardContainer.addEventListener("click", (e) => window.open(this.prop.url));
  }

  parseDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day].join(". ");
  }

  handleMouseOver() {
    const cardImage = this.shadow.querySelector(".card-image");
    const cardInfo = this.shadow.querySelector(".card-info");

    cardImage.style.transform = "scale(1.2)";
    cardInfo.style.backgroundColor = "var(--library-white-smoke)";
  }

  handleMouseOut() {
    const cardImage = this.shadow.querySelector(".card-image");
    const cardInfo = this.shadow.querySelector(".card-info");
    // 마우스 아웃 이벤트를 처리하는 로직
    cardImage.style.transform = "";
    cardInfo.style.backgroundColor = "";
  }
}
customElements.define("card-component", CardComponent);
