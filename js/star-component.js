class Star extends HTMLElement {
  constructor() {
    super();
    // Shadow DOM 생성
    const shadowRoot = this.attachShadow({ mode: "open" });
    // 템플릿 생성
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @import url("./css/reset.css");
        .like-btn {
          cursor: pointer;
          width: 45px;
          height: 45px;
          background-color: transparent;
        }
        .inactive {
          background-image: url(./img/star-inactive.png);
          background-size: 30px;
          background-position: center;
          background-repeat: no-repeat;
        }
        .active {
          background-image: url(./img/star-active.png);
          background-size: 30px;
          background-position: center;
          background-repeat: no-repeat;
        }
      </style>
      <button class="like-btn inactive"></button>
    `;
    // Shadow DOM에 템플릿 추가
    shadowRoot.appendChild(template.content.cloneNode(true));

    // 별 아이콘 클릭시 활성 기능
    const likeBtn = shadowRoot.querySelector(".like-btn");

    function toggleLikeIcon(e) {
      e.preventDefault();
      const icon = e.target;
      if (icon.classList.contains("inactive")) {
        icon.classList.remove("inactive");
        icon.classList.add("active");
      } else {
        icon.classList.remove("active");
        icon.classList.add("inactive");
      }
    }
    likeBtn.addEventListener("click", toggleLikeIcon);
  }
}

// Custom Element 등록
window.customElements.define("star-component", Star);
