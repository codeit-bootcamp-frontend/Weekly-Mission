const MOCK_CARD_LIST = [
  {
    id: 1,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img1.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 2,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img2.png",
    isLiked: true,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 3,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img3.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 4,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img4.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 5,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img5.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 6,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img6.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 7,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img7.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 8,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img8.png",
    isLiked: false,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
  {
    id: 9,
    href: "https://www.codeit.kr",
    thumbnailSrc: "/images/card-thumbnails/img9.png",
    isLiked: true,
    metadata: {
      updatedTime: new Date(),
      description:
        "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.",
      date: new Date(2023, 3, 13),
    },
  },
];

export class LinkCardList extends HTMLElement {
  #prop = {
    cardPropList: MOCK_CARD_LIST,
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  renderCardList() {
    this.#prop.cardPropList.forEach((cardProp) => {
      const cardElem = document.createElement("custom-link-card");
      this.shadowRoot.querySelector("div.card-list").appendChild(cardElem);
      cardElem.prop = cardProp;
      cardElem.classList.add("link-card");
    });
  }

  render() {
    this.shadowRoot.innerHTML = "";

    const style = document.createElement("style");
    style.innerHTML = this.styles;
    this.shadowRoot.appendChild(style);

    const template = document.createElement("template");
    template.innerHTML = this.template;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.renderCardList();
  }

  get styles() {
    return `
      * {
        box-sizing: border-box;
      }

      :host {
        display: block;
      }

      .card-list {
        width: fit-content;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        gap: 1.5rem 1.25rem;
      }

      @media only screen and (max-width: 1100px) {
        .card-list {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
      }

      @media only screen and (max-width: 767px) {
        .card-list {
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
      }
    `;
  }

  get template() {
    return `
      <div class="card-list">
      </div>
    `;
  }
}

customElements.define("custom-link-card-list", LinkCardList);
