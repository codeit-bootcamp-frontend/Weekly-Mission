class Card extends HTMLElement {
  constructor() {
    super();

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
          width: 340px;
          height: 200px;
          overflow: hidden;
          transform: scale(1);
        }

        .card .card-image {
          transition: transform 1s ease;
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
      
      <a href="https://www.codeit.kr" target = "_blank" noopener noreferrer>
        <div class="card">
          <div class="image-box">
            <img src="card-default.png" alt="card-image" class="card-image">
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
    const title = this.getAttribute('title') || '10 minutes ago';
    const content = this.getAttribute('content') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo metus, tempor eu consectetur et, rutrum ut purus. Ut pellentesque semper mi. Vivamus eget aliquet nibh.';
    const date = this.getAttribute('date') || '2023. 3. 15';

    const uploadTime = this.shadowRoot.querySelector('.upload-time');
    const contentElem = this.shadowRoot.querySelector('.content');
    const dateElem = this.shadowRoot.querySelector('.date');

    uploadTime.textContent = title;
    contentElem.textContent = content;
    dateElem.textContent = date;
    this.cardImage.src = this.getAttribute('image');
  }
  
}


customElements.define('card-component', Card);