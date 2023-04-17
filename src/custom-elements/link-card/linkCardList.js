export class LinkCardList extends HTMLElement {
  #prop = {
    cardPropList: undefined,
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  get prop() {
    return this.#prop;
  }

  set prop(value) {
    this.#prop.cardPropList = value;
    this.renderCardList();
  }

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

    if (this.#prop.cardPropList) {
      this.renderCardList();
    }
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
