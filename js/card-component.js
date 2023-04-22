import { getFolderData } from "./data.js";

class Card extends HTMLElement {
  static cardNum = 0; // 1. 카드 데이터의 인덱스 값
  constructor() {
    super();
  }
  async connectedCallback() {
    // 2. 컴포넌트가 렌더링 될때마다 카드 데이터의 인덱스 값 증가 -> 각 인덱스 값에 해당 되는 데이터 내에 필요한 데이터 추출
    const folderData = await getFolderData();
    const cardData = folderData.links[Card.cardNum++];
    const { createdAt, url, description, imageSource } = cardData;

    // 3. shadowroot와 template 생성
    const shadowRoot = this.attachShadow({ mode: "open" });
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
          background-image: ${setBackgroundImage()};
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
      <a href="${url}">
        <article class="card">
          <star-component></star-component>
          <div class="card-image"></div> 
          <div class="card-body">
            <button class="menu-btn">
              <img src="./img/kebab.png">
            </button>
            <div class="card-time">${calcElapsedTime()}</div>
            <p class="card-description">${description}</p>
            <div class="card-date">${fomattedCurrentDate()}</div>
          </div> 
        </article>
      </a>
      <script type="module" src="./js/star-component.js"></script>
    `;
    shadowRoot.appendChild(template.content.cloneNode(true));

    // 4. imageSource에 따라 카드 이미지 다르게 보여짐 (null: 받은 데이터가 없을때(기본값), 'undefined': 이미지 데이터를 받았으나 값이 없을때 )
    function setBackgroundImage() {
      return imageSource
        ? `url(${imageSource})`
        : "url(../img/card-default.png)";
    }

    // 5. 현재 시간 계산
    function fomattedCurrentDate() {
      let createdTime = new Date(createdAt);
      return new Intl.DateTimeFormat("ko-KR")
        .format(new Date(createdTime))
        .slice(0, -1);
    }

     // 6. 경과 시간 계산
    function calcElapsedTime() {
      let createdTime = new Date(createdAt);
      let currentTime = new Date();
      let diffMSec = currentTime.getTime() - createdTime.getTime();
      let diffMin = Math.round(diffMSec / (60 * 1000)); // 현재 시간과 생성 시간과의 분 차이
      if (diffMin < 60) {
        return diffMin < 2 ? `1 minute ago` : `${diffMin} minutes ago`;
      } else if (diffMin < 24 * 60) {
        return (diffMin = 60
          ? `1 hour ago`
          : `${Math.floor(diffMin / 60)} hours ago`);
      } else if (diffMin < 24 * 60 * 31) {
        return diffMin < 24 * 60 * 2
          ? `1 day ago`
          : `${Math.floor(diffMin / 60 / 24)} days ago`;
      } else if (diffMin < 24 * 60 * 31 * 12) {
        return diffMin < 24 * 60 * 31 * 2
          ? `1 month ago`
          : `${Math.floor(diffMin / 60 / 24 / 31)} months ago`;
      } else {
        return diffMin < 24 * 60 * 31 * 12 * 2
          ? `1 year ago`
          : `${Math.floor(diffMin / 60 / 24 / 31 / 12)} years ago`;
      }
    }
  }
}

// 8. Custom Element 등록
window.customElements.define("card-component", Card);
