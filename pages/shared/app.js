import Footer from "/components/Footer.js";
import Header from "/components/Header.js";
import Search from "/components/Search.js";
import Card from "/components/Card.js";
import { getElem } from "/hooks/getElement.js";

(function () {
  const cardContainer = getElem(document, "main .contents .card-container");
  const heroContents = getElem(document, ".hero.inner");
  const headerContainer = getElem(document, "header .inner");

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
        .then((response) => response.json())
        .then((result) => result.data.folder)
        .then((data) => {
          heroContents.innerHTML = /* html */ `
          <div class="codeit-avatar">
            <img src="${data.owner.profileImageSource}" alt="Owner Avatar" />
          </div>
          <span class="atsign">@${data.owner.name}</span>
          <span class="marks">${data.name}</span>
          `;

          data.links.forEach((link) => {
            cardContainer.append(new Card(link));
          });
        });

      fetch("https://bootcamp-api.codeit.kr/api/sample/user")
        .then((response) => response.json())
        .then((result) => result.data)
        .then((data) => {
          headerContainer.append(new Header(data));
        });
    });
  };
  init();
})();
