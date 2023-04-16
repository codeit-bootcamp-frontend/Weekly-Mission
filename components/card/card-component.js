import { StarComponent } from "../star/star-component.js";
export class CardComponent extends HTMLElement {
  constructor(imageSrc, updateTime, description, date) {
    super();

    this.shadow = this.attachShadow({ mode: "open" });

    // CSS
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/card/card-component.css");
    this.shadow.appendChild(linkElem);

    this._imageSrc = imageSrc;
    this._updateTime = updateTime;
    this._description = description;
    this._date = date;
  }

  connectedCallback() {
    // 카드 데이터
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = this._imageSrc;

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
    cardDescription.textContent = this._description;

    const cardDate = document.createElement("div");
    cardDate.classList.add("card-date");
    cardDate.textContent = this._date;

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
