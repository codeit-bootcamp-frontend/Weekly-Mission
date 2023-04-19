class Card extends HTMLElement {
  constructor() {
    super();
    // 인자로 전달된 속성값을 가져와서 사용
    const imageUrl = this.getAttribute("image-url");
    // Shadow DOM 생성
    const shadowRoot = this.attachShadow({ mode: "open" });
    // 템플릿 생성
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        @import url("./css/reset.css");
        .card {
          position: relative;
          border-radius: 10px;
          box-shadow: 0px 5px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          width: 340px;
          cursor: pointer;
        }
        star-component {
          cursor: pointer;
          position: absolute; 
          top: 10px;
          right: 10px;
        }
        .card-image {
          height: 200px;
          background-image: url(${imageUrl});
          background-size: 100%;
          background-position: center;
          transition: background-size 0.3s ease-in;
        }
        .card-body {
          padding: 15px 20px;
          position: relative;
        }
        .menu-btn {
          cursor: pointer;
          width: 45px;
          height: 40px;
          position: absolute; 
          top: 5px;
          right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          background-color: transparent;
        }
        .menu-btn img {
          width: 20px;
        }
        .card-time {
          font-size: 13px;
          color: #666666;
          margin-bottom: 12px;
        }
        .card-description {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* 텍스트 줄 수 제한 */
          -webkit-box-orient: vertical;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .card-date {
          font-size: 14px;
          color: #333333;
        }
        .card:hover .card-image {
          background-size: 120%;
        }
        .card:hover .card-body {
          background-color: var(--gray-5);
        }
        @media (max-width: 767px) {
          .card {
            width: 325px;
          }
          .card-image {
            height: 190px;
          }
        }
      </style>
      <a href="https://www.codeit.kr">
        <article class="card">
          <star-component></star-component>
          <div class="card-image"></div> 
          <div class="card-body">
            <button class="menu-btn">
              <img src="./img/kebab.png">
            </button>  
            <div class="card-time">10 minutes ago</div>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nesciunt recusandae quas doloribus laboriosam possimus labore vitae nostrum voluptas exercitationem, sint nemo ab dolor, ut harum quis repellendus iusto! Esse?</p>
            <div class="card-date">2023.3.15</div>
          </div> 
        </article>
      </a>
      <script type="module" src="./js/star-component.js"></script>
    `;
    // Shadow DOM에 템플릿 추가
    shadowRoot.appendChild(template.content.cloneNode(true));

    // 별 아이콘 클릭시 활성 기능 추가
    const card = shadowRoot.querySelector(".card");
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
window.customElements.define("card-component", Card);
