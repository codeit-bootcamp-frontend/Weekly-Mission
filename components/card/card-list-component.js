import { CardComponent } from "./card-component.js";
import { fetchCardsData } from "./fetchCardsData.js";
class CardListComponent extends HTMLElement {
  constructor() {
    super();
    this.url = this.getAttribute("url");
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      this.cards = await fetchCardsData(this.url);
      this.render();
    } catch (error) {
      console.log(error);
    }
  }

  createCards(card) {
    const cardComponent = new CardComponent(
      card.imageSrc,
      card.updateTime,
      card.description,
      card.date
    );
    return cardComponent;
  }

  render() {
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/card/card-list-component.css");
    this.shadowRoot.appendChild(linkElem);

    const cardListContainer = document.createElement("div");
    cardListContainer.classList.add("card-list-container");

    this.cards.forEach((card) => {
      const cardComponent = this.createCards(card);
      cardListContainer.appendChild(cardComponent);
    });

    this.shadowRoot.appendChild(cardListContainer);
  }
}

customElements.define("card-list-component", CardListComponent);
