import { StarComponent } from "../star/starComponent.js";
export class CardComponent extends HTMLElement {
  #prop = null;
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
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

  calculateTimeDiff(dateString) {
    const updatedDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today - updatedDate;

    const MINUTE = 60 * 1000;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const MONTH = DAY * 31;
    const YEAR = DAY * 365;

    const timeUnits = [
      { value: YEAR, label: "year" },
      { value: MONTH, label: "month" },
      { value: DAY, label: "day" },
      { value: HOUR, label: "hour" },
      { value: MINUTE, label: "minute" },
    ];

    for (let i = 0; i < timeUnits.length; i++) {
      const { value, label } = timeUnits[i];

      if (timeDiff < value) {
        continue;
      }

      const formattedTimeDiff = Math.floor(timeDiff / value);

      return (
        formattedTimeDiff +
        " " +
        label +
        (formattedTimeDiff > 1 ? "s" : "") +
        " ago"
      );
    }
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

  get template() {
    return `
      <div class="card-container">
        <img class="card-image" src="${this.prop.imageSrc}" />
        <span class="star-icon"></span>
        <div class="card-info">
          <div class="card-info-head">
            <div class="card-update-time">${this.calculateTimeDiff(
              this.prop.date
            )}</div>
            <img class="kebab-icon" src="/static/imgs/kebab.svg" />
          </div>
          <div class="card-description">${this.prop.description}</div>
          <div class="card-date">${this.parseDate(this.prop.date)}</div>
        </div>
      </div>
      `;
  }
  render() {
    // CSS
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/card/card-component.css");
    this.shadow.appendChild(linkElem);
    const cardComponent = document.createElement("template");
    cardComponent.innerHTML = this.template;
    this.shadow.appendChild(cardComponent.content.cloneNode(true));

    const starIcon = new StarComponent();
    this.shadow.querySelector(".star-icon").appendChild(starIcon);
  }
}
customElements.define("card-component", CardComponent);
