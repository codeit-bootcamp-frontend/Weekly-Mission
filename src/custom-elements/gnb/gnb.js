export class Gnb extends HTMLElement {
  // 컴포넌트 정보를 담고 있는 프로퍼티
  #prop = { isLoggedIn: false, profileImgSrc: "", username: "", email: "" };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.prevScrollPos = window.scrollY;
    this.documentHeader = document.querySelector("header");
    this.handleScroll = this.handleScroll.bind(this);
    // media query 경계선 지정 (헤더 높이가 767px을 기준으로 바뀌기 때문)
    this.mq = window.matchMedia("(max-width: 767px)");
    this.handleMediaChange = this.handleMediaChange.bind(this);
  }

  /**
   * 컴포넌트가 DOM트리에 노드로 추가되었을 때 호출되는 콜백
   */
  connectedCallback() {
    this.render();
    this.navHeight = this.documentHeader.offsetHeight;
    window.addEventListener("scroll", this.handleScroll);
    // media query가 width경계를 건나는 시점에만 header의 높이를 다시 계산하기 위한 핸들러 등록
    this.mq.addEventListener("change", this.handleMediaChange);
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
    this.mq.removeEventListener("change", this.handleMediaChange);
  }

  get prop() {
    return this.#prop;
  }

  set prop(value) {
    this.#prop = value;
    if (value.isLoggedIn) {
      this.showUserInfo();
    }
  }

  get styles() {
    return `
      * {
        box-sizing: border-box;
      }

      #header-wrapper {
        width: 100%;
        max-width: 120rem;
        height: 5.813rem;
        padding: 1.25rem 12.5rem;
        margin: 0 auto;
        background-color: var(--gray-1);
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #login-btn {
        width: 8rem;
        height: 3.313rem;
        border-radius: 0.5rem;
        text-decoration: none;
        padding: 1rem 2.531rem;
        font-size: 1.125rem;
        font-weight: 600;
        color: #f5f5f5;
        background-image: linear-gradient(
          90.99deg,
          #6d6afe 0.12%,
          #6ae3fe 101.84%
        );
      }

      #logo img:hover {
        cursor: pointer;
      }

      .my-account {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .profile-container {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 0.375rem;
      }

      .profile-img {
        width: 100%;
        height: auto;
      }

      @media only screen and (max-width: 1200px) {
        #header-wrapper {
          display: flex;
          justify-content: center;
          padding: 1.5rem 0;
        }

        nav {
          width: 49.028rem;
        }
      }

      @media only screen and (max-width: 868px) {
        #header-wrapper {
          padding: 1.5rem 2rem;
        }
      }

      @media only screen and (max-width: 767px) {
        #header-wrapper {
          width: 100%;
          height: 3.938rem;
          padding: 0.813rem 2rem;
          display: flex;
        }

        #logo img {
          width: 4.849rem;
          height: 0.875rem;
        }

        #login-btn {
          width: 5rem;
          height: 2.313rem;
          padding: 0.625rem 1.344rem;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 1.063rem;
        }

        .profile-container {
          margin: none;
        }

        .username-container {
          display: none;
        }
      }
    `;
  }

  /**
   * 로그인된 유저의 프로필 이미지와 이메일을 prop에서 읽어와 화면에 노드를 생성하는 함수
   */
  showUserInfo() {
    this.shadowRoot.querySelector("#login-btn").remove();
    const myAccountDiv = document.createElement("div");
    myAccountDiv.classList.add("my-account");

    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile-container");
    myAccountDiv.prepend(profileDiv);

    const profileImg = document.createElement("img");
    profileImg.classList.add("profile-img");
    profileImg.setAttribute("src", this.prop.profileImgSrc);
    profileDiv.append(profileImg);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email-container");
    emailDiv.textContent = this.prop.email;
    myAccountDiv.append(emailDiv);

    this.shadowRoot.querySelector("nav").append(myAccountDiv);
  }

  handleScroll() {
    let currentScrollPos = window.scrollY;
    if (this.prevScrollPos > currentScrollPos) {
      this.documentHeader.style.top = "0";
      this.documentHeader.classList.add("shadow");
    } else {
      this.documentHeader.style.top = "-" + this.navHeight + "px";
      this.documentHeader.classList.remove("shadow");
    }

    if (currentScrollPos == 0) {
      this.documentHeader.classList.remove("shadow");
    }
    this.prevScrollPos = currentScrollPos;
  }

  handleMediaChange() {
    this.navHeight = this.documentHeader.offsetHeight;
  }
  /**
   * shadow root 노드에 자식 노드들을 추가하여 화면에 렌더링하는 함수
   */
  render() {
    this.shadowRoot.innerHTML = "";

    const style = document.createElement("style");
    style.innerHTML = this.styles;
    this.shadowRoot.appendChild(style);

    const template = document.createElement("template");
    template.innerHTML = this.template;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /**
   * shadow root의 자식으로 추가될 템플릿
   */
  get template() {
    return `
      <div id="header-wrapper">
        <nav>
          <a id="logo" href="/">
            <img src="images/logo.svg" />
          </a>
          <a id="login-btn" href="signin.html"> 로그인 </a>
        </nav>
      </div>
    `;
  }
}

customElements.define("custom-gnb", Gnb);
