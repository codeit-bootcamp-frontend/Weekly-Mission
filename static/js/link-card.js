const template = document.createElement("template");
template.innerHTML = `
  <style>
    * {
      box-sizing: border-box;
    }
    
    p {
      margin: 0;
    }

    #card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      position: relative;
      border-radius: 1.5rem;
      overflow: hidden;
      width: 34rem;
      background-color: var(--white);
      box-shadow: 0 0.5rem 2.5rem rgba(0, 0, 0, 0.08);
    }

    #card .star {
      position: absolute;
      top: 1.6rem;
      right: 1.6rem;
      width: 3.2rem;
    }
    
    .star #marked {
      display: none;
    }

    #card #card-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      height: 20rem;
    }

    #card #card-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem 2rem;
    }

    #card-text #first-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #first-line #since {
      font-size: 1.4rem;
      color: var(--card-since);
    }

    #first-line #eclipse-container {
      display: flex;
      justify-content: space-between;
      width: 1.9rem;
    }

    #card-text #description {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 29.5rem;
      line-height: 150%;
      font-weight: 500;
    }

    #card-text #date {
      font-size: 1.4rem;
      color: var(--card-date);
    }

    @media (hover: hover) {
      #card:hover {
        background-color: var(--gray5);
      }
      
      #card:hover #card-image {
        background-size: 120%;
      }
    }
  </style>
  <div id="card">
    <div id="card-image">
      <img id="unmarked" class="star" src="/static/star1.png" alt="Unmarked icon">
      <img id="marked" class="star" src="/static/star2.png" alt="Marked icon">
    </div>
    <div id="card-text">
      <div id="first-line">
        <p id="since">10분 전</span>
        <div id="eclipse-container">
          <img class="eclipse" src="/static/eclipse.png" alt="eclipse" width="3">
          <img class="eclipse" src="/static/eclipse.png" alt="eclipse" width="3">
          <img class="eclipse" src="/static/eclipse.png" alt="eclipse" width="3">
        </div>
      </div>
      <p id="description">Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.
      </p>
      <p id="date">2023. 4. 16</p>
    </div>
  </div>
`;

class Card extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    const backgroundImg = this.getAttribute("image");
    const bookmark = this.getAttribute("bookmark");
    const card = this.shadowRoot.getElementById("card");
    const marked = this.shadowRoot.getElementById("marked");
    const unmarked = this.shadowRoot.getElementById("unmarked");

    this.shadowRoot.getElementById("card-image").style.backgroundImage = `url(${backgroundImg})`;
    this.shadowRoot.getElementById("since").innerText = this.getAttribute("since");
    this.shadowRoot.getElementById("description").innerText = this.getAttribute("description");
    this.shadowRoot.getElementById("date").innerText = this.getAttribute("date");


    card.addEventListener('click', () => window.open('https://www.codeit.kr'));
    if (bookmark === "true") {
      marked.style.display = "block";
      unmarked.style.display = "none";
    } else {
      marked.style.display = "none";
      unmarked.style.display = "block";
    }

    function bookmarkToggle(e) {
      if (marked.style.display === "none") {
        marked.style.display = "block";
        unmarked.style.display = "none";
      } else {
        marked.style.display = "none";
        unmarked.style.display = "block";
      }
      e.stopPropagation();
    }

    marked.addEventListener('click', bookmarkToggle);
    unmarked.addEventListener('click', bookmarkToggle);

  }
}

customElements.define("link-card", Card);
