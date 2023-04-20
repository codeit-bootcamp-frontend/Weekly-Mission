const cardContainer = document.querySelector('.cards')

async function folderFetch() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const result = await response.text();
  const {data} = await JSON.parse(result);
  const {folder} = data
  const {links} = folder
  links.forEach((link) => {
  const { imageSource, description, createdAt, url } = link
  const linkCardElement = document.createElement("link-card")

  // linkCardElement.firstElementChild.style.backgroundImage = `url(${imageSource})`;

  linkCardElement.setAttribute("description",description)
  const createdDate = new Intl.DateTimeFormat('kr').format(new Date(createdAt));

  linkCardElement.setAttribute("createdAt", createdDate)
  cardContainer.appendChild(linkCardElement)
  })
}
folderFetch();

/*
    const backgroundImg = this.getAttribute("image");
    this.shadowRoot.getElementById("card-image").style.backgroundImage = `url(${backgroundImg})`;
    this.shadowRoot.getElementById("since").innerText = this.getAttribute("since");
    this.shadowRoot.getElementById("description").innerText = this.getAttribute("description");
    this.shadowRoot.getElementById("date").innerText = this.getAttribute("date");
*/