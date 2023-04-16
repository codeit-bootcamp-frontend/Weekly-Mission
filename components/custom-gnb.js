class CustomGNB extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      .gnb {
        width: 100%;
        max-width: 192rem;
        height: 9.4rem;
        padding: 0 20rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--gray-f);
        position: sticky;
        top: 0;
        z-index: 1;
      }
      
      .linkbrary-logo-image {
        display: block;
      }
      
      .login-button {
        padding: 1.6rem 4.05rem;
        font-size: 1.8rem;
        font-weight: 600;
        color: #f5f5f5;
        border-radius: 0.8rem;
        background-image: linear-gradient(to right, var(--primary) 20%, #6ae3fe);
      }

      .profile-container {
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }
      
      .profile-email {
        font-size: 1.4rem;
      }

      @media (max-width: 1199px) {
        .gnb {
          justify-content: center;
          padding: 0;
        }
      
        .linkbrary-logo {
          margin-right: 53.8rem;
        }
      }

      @media (max-width: 862px) {
        .gnb {
          justify-content: space-between;
          padding: 0 3.2rem;
        }
      
        .gnb .linkbrary-logo {
          margin-right: 0;
        }
      }

      @media (max-width: 767px) {
        .gnb {
          height: 6.3rem;
        }
      
        .gnb .linkbrary-logo-image {
          width: 8.867rem;
        }
      
        .gnb .login-button {
          padding: 1rem 2.15rem;
          font-size: 1.4rem;
        }

        .profile-email {
          display: none;
        }
      }
    `;

    shadowRoot.appendChild(style);

    /* data-userEmail 속성이 존재하면 로그인되었다는 뜻 */
    if (this.hasAttribute("data-userEmail")) {
      shadowRoot.innerHTML += `
        <nav class="gnb">
          <a class="linkbrary-logo" href="/">
            <img class="linkbrary-logo-image" src="/images/Linkbrary.svg" />
          </a>
          <div class="profile-container">
            <img src="/images/profile-img.svg" />
            <span class="profile-email">${this.getAttribute("data-userEmail")}</span>
          </div>
        </nav>
      `;
    } else {
      shadowRoot.innerHTML += `
      <nav class="gnb">
        <a class="linkbrary-logo" href="/">
          <img class="linkbrary-logo-image" src="/images/Linkbrary.svg" />
        </a>
        <a class="login-button" href="/signin/">
          로그인
        </a>
      </nav>
      `;
    }
  }
}

customElements.define("custom-gnb", CustomGNB);
