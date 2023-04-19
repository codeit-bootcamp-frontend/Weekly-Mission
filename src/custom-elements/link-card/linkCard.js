export class LinkCard extends HTMLElement {
  // 컴포넌트 정보를 담고 있는 프로퍼티
  #prop = {
    id: 0,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/default-thumbnail.svg",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
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

    this.thumbnailImg.setAttribute("src", value.thumbnailSrc);
    this.descriptionDiv.textContent = value.metadata.description;
    this.dateP.textContent = this.parseDate(value.metadata.date);
    const likeBtnSrc = this.#prop.isLiked
      ? "/images/like-btn-liked.svg"
      : "/images/like-btn-unliked.svg";
    this.likeBtn.setAttribute("src", likeBtnSrc);
  }

  parseDate(date) {
    const leftPad = (value) => {
      if (value >= 10) {
        return value;
      }

      return `0${value}`;
    };

    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());

    return [year, month, day].join("-");
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
	<a href=${this.prop.href}>
      <div class="card-container">
        <div class="thumbnail-box">
          <img
		    id="thumbnail"
            class="thumbnail-img"
            src=${this.prop.thumbnailSrc}
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
          <p class="updated-time">10 minutes ago</p>
          <div id="description" class="description-container">
            ${this.prop.metadata.description}
          </div>
          <p id="date" class="date">${this.parseDate(
            this.prop.metadata.date
          )}</p>
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

    this.thumbnailImg = this.shadowRoot.querySelector("#thumbnail");
    this.likeBtn = this.shadowRoot.querySelector("#like-btn");
    this.descriptionDiv = this.shadowRoot.querySelector("#description");
    this.dateP = this.shadowRoot.querySelector("#date");

    this.likeBtn.addEventListener("click", this.handleClickLike.bind(this));
  }
}

customElements.define("custom-link-card", LinkCard);
