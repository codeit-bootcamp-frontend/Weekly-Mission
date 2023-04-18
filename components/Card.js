export default class Card extends HTMLElement {
  constructor(imgNumber) {
    super();

    this.imgNumber = imgNumber;

    this.eventListenerController = new AbortController();

    this.openCodeit = () => {
      window.open("https://www.codeit.kr");
    };

    this.cardHoverInteraction = (card, cardTopImg) => {
      return function (event) {
        if (event.type === "mouseover") {
          card.style.background = "#F0F6FF";
          cardTopImg.style.transform = "scale(1.2)";
        } else if (event.type === "mouseout") {
          card.style.background = "white";
          cardTopImg.style.transform = "scale(1)";
        }
      };
    };

    this.cardClickInteraction = (targetElement, openCodeit) => {
      return function (event) {
        if (
          event.target === targetElement &&
          targetElement.getAttribute("src") ===
            "/static/public/card-asterisk.svg"
        ) {
          targetElement.setAttribute(
            "src",
            "/static/public/card-asterisk-check.svg"
          );
          return;
        }

        if (
          event.target === targetElement &&
          targetElement.getAttribute("src") ===
            "/static/public/card-asterisk-check.svg"
        ) {
          targetElement.setAttribute("src", "/static/public/card-asterisk.svg");
          return;
        }

        openCodeit();
      };
    };
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
        <div class="card-asterisk">
          <img src="/static/public/card-asterisk.svg" alt="Card Asterisk" />
        </div>
        <div class="card-img-top">
          <img src="/static/public/card-img-${this.imgNumber}.svg" alt="Card Image" />
        </div>
        <div class="card-caption">
          <div class="info">
            <span class="time">10 minutes ago</span>
            <div class="more">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aut eum provident porro vel beatae consequatur qui laboriosam labore. Odio tempora dolores reprehenderit quis vel corrupti aut laudantium reiciendis. Exercitationem?</p>
          <div class="creation">2023. 3. 15</div>
        </div>
        <style>
          .card-asterisk {
            width: 32px;
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 1;
          }
          .card-asterisk img {
            width: 100%;
            height: auto;
            display: block;
          }
          .card-img-top {
            width: 100%;
            height: 200px;
            overflow: hidden;
          }
          .card-img-top img {
            width: 100%; 
            height: auto;
          }
          .card-caption {
            box-sizing: border-box;
            width: 100%;
            height: 135px;
            display: flex;
            flex-direction: column;
            padding: 15px 20px;
            gap: 10px;
          }
          .card-caption .info {
            display: flex;
            justify-content: space-between;
          }
          .card-caption .info .time {
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
          }
          .card-caption .info .more {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
          }
          .card-caption .info .more span {
            width: 3px;
            height: 3px;
            background: #333236;
            border-radius: 50%;
          }
          .card-caption .text {
            color: black;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            height: 48px;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-all;
          }
          .card-caption .creation {
            margin: 0;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #333333;
          }
        </style>
      `;

    const cardAsterisk = this.shadowRoot.querySelector(".card-asterisk");
    const cardAsteriskImg = cardAsterisk.querySelector("img");
    const cardTop = this.shadowRoot.querySelector(".card-img-top");
    const cardTopImg = cardTop.querySelector("img");

    const { signal } = this.eventListenerController;

    this.addEventListener(
      "mouseover",
      this.cardHoverInteraction(this, cardTopImg),
      { signal }
    );
    this.addEventListener(
      "mouseout",
      this.cardHoverInteraction(this, cardTopImg),
      { signal }
    );
    this.shadowRoot.addEventListener(
      "click",
      this.cardClickInteraction(cardAsteriskImg, this.openCodeit),
      { signal }
    );
  }

  disconnectedCallback() {
    this.eventListenerController.abort();
    this.shadowRoot.innerHTML = ``;
    this.attachShadow({ mode: "closed" });
  }
}

customElements.define("card-component", Card);
