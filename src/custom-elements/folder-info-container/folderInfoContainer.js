export class FolderInfoContainer extends HTMLElement {
  // 컴포넌트 정보를 담고 있는 프로퍼티
  #prop = null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get prop() {
    return this.#prop;
  }

  set prop(value) {
    if (typeof value !== "object" || value === null) {
      throw new Error("Invalid object format!");
    }

    const { folderName, ownerName, profileImgSrc } = value;
    if (
      typeof folderName !== "string" ||
      typeof ownerName !== "string" ||
      typeof profileImgSrc !== "string"
    ) {
      throw new Error("Invalid object format!");
    }
    this.#prop = value;
    this.render();
    this.profileImg.setAttribute("src", this.prop.profileImgSrc);
    this.ownerName.innerText = this.prop.ownerName;
    this.folderName.innerText = this.prop.folderName;
  }

  get styles() {
    return `
	  * {
		box-sizing: border-box;
	  }

	  p, h1 {
		margin: 0;
	  }

	  :host {
		display: block;
	  }

      .user-info-container {
        width: fit-content;
        margin: auto;
      }

      .profile-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1.25rem;
      }

      .profile-img-box {
        width: 3.75rem;
        height: 3.75rem;
      }

      .profile-img-box img {
        display: block;
        width: 100%;
        height: 100%;
      }

      .username {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .title {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 3rem;
      }
    `;
  }

  /**
   * shadow root의 자식으로 추가될 템플릿
   */
  get template() {
    return `
      <div class="user-info-container">
        <div class="profile-container">
          <div class="profile-img-box">
            <img
              id="profile-img"
              src="${this.prop.profileImgSrc}"
              alt="avatar"
            />
          </div>
          <p id="username" class="username">${this.prop.ownerName}</p>
        </div>
        <h1 id="folder-name" class="title">${this.prop.folderName}</h1>
      </div>
    `;
  }

  render() {
    this.shadowRoot.innerHTML = "";
    if (this.prop) {
      const style = document.createElement("style");
      style.innerHTML = this.styles;
      this.shadowRoot.appendChild(style);

      const template = document.createElement("template");
      template.innerHTML = this.template;
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      this.profileImg = this.shadowRoot.querySelector("#profile-img");
      this.ownerName = this.shadowRoot.querySelector("#username");
      this.folderName = this.shadowRoot.querySelector("#folder-name");
    }
  }
}

customElements.define("custom-folder-info-container", FolderInfoContainer);
