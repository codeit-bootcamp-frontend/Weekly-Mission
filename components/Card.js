export default class Card extends HTMLElement {
  constructor(props) {
    super();

    this.props = props;
    this.dummyLink = "/static/public/image-dummy.png";
    this.originalDate = new Date(props.createdAt);
    this.createDate = this.originalDate.toLocaleDateString().slice(0, -1);
    this.currentDate = new Date();
    this.timeDiffMinutes = (this.currentDate - this.originalDate) / 1000 / 60;

    this.prettyTimeDiff = (timeDiffMinutes) => {
      const r = (t) => Math.round(t);

      if (r(timeDiffMinutes) < 2) {
        return "1 minute ago";
      } else if (r(timeDiffMinutes) <= 59) {
        return `${r(timeDiffMinutes)} minutes ago`;
      } else if (r(timeDiffMinutes) <= 119) {
        return "1 hour ago";
      } else if (r(timeDiffMinutes / 60) <= 23) {
        return `${r(timeDiffMinutes / 60)} hours ago`;
      } else if (r(timeDiffMinutes / 60) <= 47) {
        return "1 day ago";
      } else if (r(timeDiffMinutes / 60 / 24) <= 30) {
        return `${r(timeDiffMinutes / 60 / 24)} days ago`;
      } else if (r(timeDiffMinutes / 60 / 24) <= 61) {
        return "1 month ago";
      } else if (r(timeDiffMinutes / 60 / 24 / 31) <= 11) {
        return `${r(timeDiffMinutes / 60 / 24 / 31)} months ago`;
      } else {
        return `${Math.floor(timeDiffMinutes / 60 / 24 / 31 / 12)} years ago`;
      }
    };

    this.eventListenerController = new AbortController();

    this.openUrl = () => {
      window.open(`${this.props.url}`);
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

    this.cardClickInteraction = (targetElement, openUrl) => {
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

        openUrl();
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
          <img src="${
            this.props.imageSource ? this.props.imageSource : this.dummyLink
          }" alt="${this.props.title}" />
        </div>
        <div class="card-caption">
          <div class="info">
            <span class="time">${this.prettyTimeDiff(
              this.timeDiffMinutes
            )}</span>
            <div class="more">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p class="text">${this.props.description}</p>
          <div class="creation">${this.createDate}</div>
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
            height: 100%;
            object-fit: cover;
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
      this.cardClickInteraction(cardAsteriskImg, this.openUrl),
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
