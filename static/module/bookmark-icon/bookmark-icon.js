const template = document.createElement("template");
template.innerHTML = `
  <style>
    @import url("/static/css/global.css");
    @import url("/static/module/bookmark-icon/bookmark-icon.css");
  </style>
  <img id="unmarked" class="star" src="/static/img/star1.png" alt="Unmarked icon">
  <img id="marked" class="star" src="/static/img/star2.png" alt="Marked icon">
`;

class Bookmark extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});
    this.shadowRoot.append(template.content.cloneNode(true));
    
    const bookmark = this.getAttribute("bookmark");
    const marked = this.shadowRoot.getElementById("marked");
    const unmarked = this.shadowRoot.getElementById("unmarked");

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

customElements.define("bookmark-icon", Bookmark);
