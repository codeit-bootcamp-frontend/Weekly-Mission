export default class CustomStar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/styles/global-style.css");
        .star {
          width: 100%;
          height: 100%;
        }
      </style>
      <img class="star" src="images/gray-star.png" alt="별(일반)" />
    `;

    const starElement = this.shadowRoot.querySelector(".star");
    starElement.addEventListener("click", (e) => {
      e.preventDefault();
      const classList = e.target.classList;
      if (classList.toggle("star-favor")) {
        e.target.src = "./images/purple-star.png";
        e.target.alt = "별(즐겨찾기)";
      } else {
        e.target.src = "./images/gray-star.png";
        e.target.alt = "별(일반)";
      }
    });
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}

customElements.define("custom-star", CustomStar);
