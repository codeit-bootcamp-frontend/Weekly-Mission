export default class Card extends HTMLElement {
  constructor(imgNumber) {
    super();

    this.imgNumber = imgNumber;
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
          position: absolute;
          top: 16px;
          right: 16px;
        }
        .card-img-top {
          width: 100%;
          height: 200px;
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
  }
}

customElements.define("card-component", Card);
