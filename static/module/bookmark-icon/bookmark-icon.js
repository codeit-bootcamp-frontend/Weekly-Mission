const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");
    @import url("/static/module/bookmark-icon/bookmark-icon.css");
  </style>
  <img id="star" src="/static/img/star1.png" alt="Bookmark icon">
`;

class Bookmark extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    let bookmark = this.getAttribute("bookmark");
    const star = this.shadowRoot.getElementById("star");

    if (bookmark === "true") {
      star.src = "/static/img/star2.png"
    } else {
      star.src = "/static/img/star1.png"
    }

    function bookmarkToggle(e) {
      if (bookmark === "true") {
        star.src = "/static/img/star1.png"
        bookmark = "false"
      } else {
        star.src = "/static/img/star2.png"
        bookmark = "true"
      }
      e.stopPropagation();
    }

    star.addEventListener('click', bookmarkToggle);
  }
}

customElements.define("bookmark-icon", Bookmark);
