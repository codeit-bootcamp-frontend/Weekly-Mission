class Card extends HTMLElement {
  constructor() {
    super();
    this.starImg = document.createElement('div');
    this.starImg.classList.add('star');
    this._cardImageSource = '/pictures/default.png';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /* html */ `
    <style>
      .card {
        width: 340px;
        height: 334px;
        box-shadow: 0px 5px 25px rgba(0,0,0,0.08);
        cursor: pointer;
      }

      .card .img-box {
        width: 100%;
        height: 200px;
        position: relative;
      }
      
      .card:hover .img-box {
        weight: 100%;
        overflow: hidden;
        border-radius: 15px 15px 0 0;
      }

      .card:hover .img-box .card-img {
        transform: scale(1.2);
        transition: 1s;
      }

      .card:hover .p-box {
        background-color: #F0F6FF;
        transition: 1s;
      }

      .card .img-box .star {
        width: 30px;
        height: 30px;
        background: url('/pictures/Star.png');
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }

      .card .img-box .star.click {
        width: 30px;
        height: 30px;
        background: url('/pictures/StarHover.png');
        position: absolute;
        top: 10px;
        right: 10px
      }

      .card .img-box .card-img {
        width: 100%;
        height: 200px;
        border-radius: 15px 15px 0 0 ;
      }


      .card .p-box {
        padding: 20px
      }

      .p-box .post-time {
        height: 17px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .p-box .post-time p {
        color: #666
      }

      .p-box .post-time .dot-box {
        width: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .p-box .content {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .p-box .post-date {
        font-weight: 400;
      }

      @media (min-width: 375px) and (max-width: 767px) {
        .card {
          width: 325px;
        }
      }

    </style>
    <div class="card">
      <div class='img-box'>
        <img class='card-img' />
      </div>
      <div class='p-box'>
        <div class='post-time'>
          <p>10 minutes ago</p>
          <div class="dot-box">
            <img src="/pictures/Ellipse 8.png" />
            <img src="/pictures/Ellipse 8.png" />
            <img src="/pictures/Ellipse 8.png" />
          </div>
        </div>
        <p class='content'>Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. </p>
        <p class='post-date'>2023. 3. 15</p>
      </div>
    </div>
      `;
  }

  toggleStar(event) {
    this.starImg.classList.toggle('click');
    event.stopPropagation();
  }
  goToCodeit() {
    location.href = 'https://www.codeit.kr';
  }

  connectedCallback() {
    if (this.hasAttribute('src')) {
      this._cardImageSource = this.getAttribute('src');
    }
    const img = this.shadowRoot.querySelector('img');
    img.setAttribute('src', this._cardImageSource);
    this.starImg.addEventListener('click', this.toggleStar.bind(this));
    const imgbox = this.shadowRoot.querySelector('.img-box');
    imgbox.appendChild(this.starImg);
    const card = this.shadowRoot.querySelector('.card');
    card.addEventListener('click', this.goToCodeit);
  }

  disconnectedCallback() {}
}

customElements.define('tony-card', Card);
