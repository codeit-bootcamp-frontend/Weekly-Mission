import { CardComponent } from "./cardComponent.js";
import { fetchCardsData } from "./fetchCardsData.js";
class CardListComponent extends HTMLElement {
  #prop = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get prop() {
    return this.#prop;
  }

  set prop(newProp) {
    // type checking 추후 구현
    this.#prop = newProp;
    this.renderCards();
  }

  createCards(card) {
    const cardComponent = new CardComponent(
      card.imageSource ?? "/static/imgs/default-card-img.png",
      card.description,
      card.createdAt
    );
    return cardComponent;
  }

  renderCards() {
    this.prop.forEach((card) => {
      const cardComponent = this.createCards(card);
      this.cardListContainer.appendChild(cardComponent);
    });
  }

  render() {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/card/card-list-component.css");
    this.shadowRoot.appendChild(linkElem);

    const cardListContainer = document.createElement("div");
    cardListContainer.classList.add("card-list-container");
    this.shadowRoot.appendChild(cardListContainer);
    this.cardListContainer = cardListContainer;
  }
}

customElements.define("card-list-component", CardListComponent);
