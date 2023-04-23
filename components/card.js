export class Card extends HTMLElement {
  constructor(props) {
    super();
    this.props = props

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Pretendard"
        }

        a {
          box-sizing: content-box;
          display: inline-block;
          width: 340px;
          margin: 0;
          text-decoration: none;
        }

        a:visited {
          color: #000;
        }

        .card {
          margin-right: 0px;
          position: relative;
          width: 340px;
          border-radius: 6%;
          box-shadow: 2px 2px 10px gray; 
          overflow: hidden;
        }

        .image-box {
          display: flex;
          width: 340px;
          height: 200px;
          overflow: hidden;
          transform: scale(1);
        }

        .card .card-image {
          transition: transform 1s ease;
          width: 100%;
          display: block;
          object-fit: cover;
        }

        .card:hover .card-image {
          transform: scale(1.2);
        }

        .card:hover .contents{
          background-color: #F0F6FF;
        }

        .favorite {
          position: absolute;
          top: 16px;
          right: 16px;
        }

        .contents {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 11px;
          width: 340px;
          height: 134px;
          padding: 15px 20px;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contents .upload-time {
          font-size: 13px;
          font-weight: 400;
          color: #666666;
        }

        .content {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 24px;
          font-size: 16px;
          font-weight: 500;
          max-height: 48px;
        }

        .contents .date {
          font-size: 15px;
          font-weight: 400;
          color: #333333;
        }
      </style>
      
      <a id="card" target = "_blank" noopener noreferrer>
        <div class="card">
          <div class="image-box">
            <img class="card-image">
          </div>
          <div class= 'favorite'>
            <img src="../images/components/star-blank.png" class= "star">
          </div>
          <div class="contents">
            <div class="content-header">
              <p class="upload-time"></p>
              <img src="../images/kebab.png">
            </div>
            <p class="content"></p>
            <p class="date"></p>
          </div>
        </div>
      </a>
    `;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));

    this.star = shadowRoot.querySelector('.star');
    this.cardImage = shadowRoot.querySelector('.card-image');

    this.star.addEventListener('click', (e) => {
      e.preventDefault();
      this.colorStar();
    });
  }

  colorStar() {
    if (this.star.getAttribute('src') === '../images/components/star-blank.png') {
      this.star.setAttribute('src', '../images/components/star-filled.png');
    } else {
      this.star.setAttribute('src', '../images/components/star-blank.png')
    }
  }

  connectedCallback() {
    const card = this.shadowRoot.querySelector("#card");
    
    const createTime = new Date(this.props.createdAt);
    const currentTime = new Date();
    const minuteDiff = Math.round((currentTime - createTime) / 1000 / 60);

    const year = createTime.getFullYear();
    const month = (createTime.getMonth() + 1);
    const day = createTime.getDate();
    const date = `${year}. ${month}. ${day}` || '2023. 3. 15';

    const title = (timeDiff) => {
      const round = (time) => Math.round(time);

      if (timeDiff < 2) {
        return "1 minute ago";
      } else if (timeDiff <= 59) {
        return `${timeDiff} minutes ago`;
      } else if (timeDiff < 120) {
        return "1 hour ago";
      } else if (round(timeDiff / 60) <= 23) {
        return `${Math.round(timeDiff / 60)} hours ago`;
      } else if (round(timeDiff / 60) < 48) {
        return `1 day ago`;
      } else if (round(timeDiff / 60 / 24) <= 30) {
        return `${round(timeDiff / 60 / 24)} days ago`
      } else if (round(timeDiff / 60 / 24) < 62) {
        return "1 month ago";
      } else if (round(timeDiff / 60 / 24 / 31) < 12) {
        return `${round(timeDiff / 60 / 24 / 31)} months ago`
      } else {
        return `${Math.floor(timeDiff / 60 / 24 / 31 / 12)} years ago`
      }
    };

    const content = this.props.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo metus, tempor eu consectetur et, rutrum ut purus. Ut pellentesque semper mi. Vivamus eget aliquet nibh.';
    
    const uploadTime = this.shadowRoot.querySelector('.upload-time');
    const contentElem = this.shadowRoot.querySelector('.content');
    const dateElem = this.shadowRoot.querySelector('.date');

    card.setAttribute("href", `${this.props.url}`)
    uploadTime.textContent = title(minuteDiff);
    contentElem.textContent = content;
    dateElem.textContent = date;
    this.cardImage.src = this.props.imageSource || "/images/components/card_default.png";
    
  }
  
}

customElements.define('card-component', Card);
