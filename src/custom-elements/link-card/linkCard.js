export class LinkCard extends HTMLElement {
  // 컴포넌트 정보를 담고 있는 프로퍼티
  #prop = {
    id: 0,
    href: "#",
    thumbnailSrc: "/images/default-thumbnail.svg",
    isLiked: false,
    metadata: {
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      createdDate: "1995-12-17T03:24:00",
    },
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * 컴포넌트가 DOM트리에 노드로 추가되었을 때 호출되는 콜백
   */
  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.likeBtn.removeEventListener();
  }

  get prop() {
    return this.#prop;
  }

  set prop(value) {
    this.#prop = value;

    this.anchor.href = value.href;
    this.thumbnailImg.setAttribute("src", value.thumbnailSrc);
    this.descriptionDiv.textContent = value.metadata.description;
    this.dateP.textContent = this.parseDate(value.metadata.createdDate);
<<<<<<< HEAD
    this.updatedTimeP.textContent = this.getTimeSinceCreation(
      value.metadata.createdDate
    );
=======
>>>>>>> 4d90a00 (feat: shared.js에서 서버에서 받은 데이터를 가공하여 컴포넌트에 전달하도록 조치)
    const likeBtnSrc = this.#prop.isLiked
      ? "/images/like-btn-liked.svg"
      : "/images/like-btn-unliked.svg";
    this.likeBtn.setAttribute("src", likeBtnSrc);
  }

  parseDate(dateString) {
    const leftPad = (value) => {
      if (value >= 10) {
        return value;
      }

      return `0${value}`;
    };
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());

    return [year, month, day].join(".");
<<<<<<< HEAD
  }

  getTimeSinceCreation(dateString) {
    const updatedDate = new Date(dateString);
    const today = new Date();
    const timeDiff = today - updatedDate;

    const MINUTE = 60 * 1000;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const MONTH = DAY * 31;

    const timeMap = {
      [MINUTE * 2]: () => "1 minute ago",
      [MINUTE * 59]: (diff) => Math.floor(diff / MINUTE) + " minutes ago",
      [HOUR * 2]: () => "1 hour ago",
      [HOUR * 23]: (diff) => Math.floor(diff / HOUR) + " hours ago",
      [DAY * 2]: () => "1 day ago",
      [DAY * 30]: (diff) => Math.floor(diff / DAY) + " days ago",
      [MONTH * 2]: () => "1 month ago",
      [MONTH * 12]: (diff) => Math.floor(diff / MONTH) + " months ago",
      [MONTH * 12 * 2]: () => "1 year ago",
    };

    const diff = Object.keys(timeMap).find((key) => timeDiff < Number(key));

    if (diff) {
      return timeMap[diff](timeDiff);
    }

    const years = Math.floor(timeDiff / (MONTH * 12));
    return years + " years ago";
=======
>>>>>>> 4d90a00 (feat: shared.js에서 서버에서 받은 데이터를 가공하여 컴포넌트에 전달하도록 조치)
  }

  get styles() {
    return `
      * {
        box-sizing: border-box;
		    text-decoration: none;
      }

      div, p {
        margin: 0;
      }

      #card-link {
        color: inherit;
      }

      a:visited {
        color: inherit;
        background-color: transparent;
        text-decoration: none;
      }

      a:hover {
        color: inherit;
        background-color: transparent;
        text-decoration: none;
      }

      a:active {
        color: inherit;
        background-color: transparent;
        text-decoration: none;
      }

      :host {
        display: inline-block;
      }

      .card-container {
		    position: relative;
        width: 21.25rem;
        height: 20.875rem;
        box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.08);
		    border-radius: 0.9375rem;
		    overflow: hidden;
		    transition: all 0.2s linear;
      }

      .card-container:hover {
        background-color: var(--gray-1);
      }

      .card-container:hover .thumbnail-img {
        transform: scale(1.2);
      }

      .thumbnail-box {
        width: 100%;
        height: 12.5rem;
		    overflow: hidden;
      }

      .thumbnail-img {
        display: block;
        width: 100%;
        height: 100%;
		    transition: all 0.2s linear;
      }

      .like-btn {
        display: block;
        position: absolute;
        top: 0.9375rem;
        right: 0.9375rem;
        cursor: pointer;
      }

      .metadata-container {
        position: relative;
        height: 8.4375rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.9375rem 1.25rem;
      }

      .kebab {
        width: 1.3125rem;
        height: 1.0625rem;
        position: absolute;
        top: 0.9375rem;
        right: 1.25rem;
        cursor: pointer;
      }

      .updated-time {
        font-size: 0.8125rem;
        color: #666666;
      }

      .description-container {
        height: 3.0625rem;
        font-size: 1rem;
        line-height: 1.5rem;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap:break-word; 
      }

      .date {
        font-size: 0.875rem;
        color: #333333;
      }

      @media only screen and (max-width: 767px) {
        .card-container {
          width: 20.3125rem;
            height: 20.4375rem;
        }
        
        .thumbnail-box {
          height: 12rem;
        }

        .like-btn {
          transform: scale(0.8825);
        }
      }
    `;
  }

  /**
   * shadow root의 자식으로 추가될 템플릿
   */
  get template() {
    return `
      <a id="card-link" href=${this.prop.href}>
        <div class="card-container">
          <div class="thumbnail-box">
            <img
              id="thumbnail"
              class="thumbnail-img"
              src=${this.prop.thumbnailSrc}
              onerror="this.onerror=null; this.src='/images/default-thumbnail.svg'"
              alt="thumbnail"
            />
            <img
              id="like-btn"
              class="like-btn"
              src="/images/like-btn-unliked.svg"
              alt="like button"
            />
          </div>
          <div class="metadata-container">
            <img id="kebab" class="kebab" src="/images/kebab.svg" alt="kebab" />
<<<<<<< HEAD
            <p id="updated-time" class="updated-time">${this.getTimeSinceCreation(
              this.prop.metadata.createdDate
            )}</p>
=======
            <p class="updated-time">10 minutes ago</p>
>>>>>>> 4d90a00 (feat: shared.js에서 서버에서 받은 데이터를 가공하여 컴포넌트에 전달하도록 조치)
            <div id="description" class="description-container">
              ${this.prop.metadata.description}
            </div>
            <p id="date" class="date">
<<<<<<< HEAD
              ${this.parseDate(this.prop.metadata.createdDate)}
=======
              ${this.parseDate(this.prop.metadata.date)}
>>>>>>> 4d90a00 (feat: shared.js에서 서버에서 받은 데이터를 가공하여 컴포넌트에 전달하도록 조치)
            </p>
          </div>
        </div>
      </a>
    `;
  }

  handleClickLike(e) {
    e.preventDefault();
    const likeBtnSrc = this.#prop.isLiked
      ? "/images/like-btn-unliked.svg"
      : "/images/like-btn-liked.svg";
    this.likeBtn.setAttribute("src", likeBtnSrc);
    this.#prop.isLiked = !this.#prop.isLiked;
  }

  render() {
    this.shadowRoot.innerHTML = "";

    const style = document.createElement("style");
    style.innerHTML = this.styles;
    this.shadowRoot.appendChild(style);

    const template = document.createElement("template");
    template.innerHTML = this.template;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.anchor = this.shadowRoot.querySelector("#card-link");
    this.thumbnailImg = this.shadowRoot.querySelector("#thumbnail");
    this.likeBtn = this.shadowRoot.querySelector("#like-btn");
    this.descriptionDiv = this.shadowRoot.querySelector("#description");
    this.dateP = this.shadowRoot.querySelector("#date");
    this.updatedTimeP = this.shadowRoot.querySelector("#updated-time");

    this.likeBtn.addEventListener("click", this.handleClickLike.bind(this));
  }
}

customElements.define("custom-link-card", LinkCard);
