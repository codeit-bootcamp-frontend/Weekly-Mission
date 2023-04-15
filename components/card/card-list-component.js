import { CardComponent } from "./card-component.js";

class CardListComponent extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM 생성
    const shadow = this.attachShadow({ mode: "open" });

    // CSS 파일 적용
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "/components/card/card-list-component.css");
    shadow.appendChild(linkElem);

    // 카드 리스트 데이터 가져오기
    fetch("/static/data/card/cards.json")
      .then((response) => response.json())
      .then((data) => {
        const cards = data.cards;

        // 카드 컨테이너 생성
        const cardListContainer = document.createElement("div");
        cardListContainer.classList.add("card-list-container");

        // 카드 리스트 생성
        cards.forEach((card, index) => {
          const cardComponent = new CardComponent(
            card.imageSrc,
            card.updateTime,
            card.description,
            card.date
          );

          cardListContainer.appendChild(cardComponent);
        });

        shadow.appendChild(cardListContainer);
      })
      .catch((error) => console.log(error));
  }
}

customElements.define("card-list-component", CardListComponent);
