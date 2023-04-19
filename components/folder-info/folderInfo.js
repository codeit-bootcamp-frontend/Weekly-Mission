export class FolderInfo extends HTMLElement {
  #prop = null;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get template() {
    return `<div class="user">
          <img
            class="codeit-avatar"
            src=${
              this.prop?.profileSrc ?? "/static/imgs/users/codeit-avatar.png"
            }
          />
          <p class="user-name">${this.prop?.ownerName ?? "@코드잇"}</p>
        </div>
        <h1 class="page-heading">${
          this.prop?.folderName ?? "⭐️ 즐겨찾기"
        }</h1>`;
  }

  get prop() {
    return this.#prop;
  }

  set prop(newProp) {
    if (typeof newProp !== "object" && newProp !== null) {
      console.warn("올바르지 않은 형식의 데이터가 들어왔습니다.");
      return;
    }
    if (
      typeof newProp.profileSrc !== "string" ||
      typeof newProp.ownerName !== "string" ||
      typeof newProp.folderName !== "string"
    ) {
      console.warn("올바르지 않은 형식의 데이터가 들어왔습니다.");
      return;
    }
    this.#prop = newProp;
  }

  showFolderInfo() {
    const { profileSrc, ownerName, folderName } = this.prop;
    this.profileImageElem.setAttribute("src", profileSrc);
    this.owerNameElem.innerText = ownerName;
    this.folderNameElem.innerText = folderName;
  }

  render() {
    const styles = document.createElement("link");
    styles.href = "/components/folder-info/folder-info.css";

    this.shadow.appendChild(styles);
    this.shadow.innerHTML += this.template;

    this.profileImageElem = this.shadow.querySelector(".codeit-avatar");
    this.owerNameElem = this.shadow.querySelector(".user-name");
    this.folderNameElem = this.shadow.querySelector(".page-heading");
  }
}

customElements.define("folder-info-component", FolderInfo);
