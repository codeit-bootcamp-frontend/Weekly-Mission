import { getFolderData } from "/api/common.js"
import { Card } from "/components/card.js"

const cardsContainer = document.querySelector('main .cards')
const headerImage = document.querySelector(".avatar");
const headerName = document.querySelector(".name");
const headerTitle = document.querySelector(".bookmark"); 

getFolderData().then((res) => {
  const links = res.links;
  links.forEach((item) => {
    cardsContainer.append(new Card(item))
  })
  headerImage.setAttribute("src", `${res.owner.profileImageSource}`)
  headerName.textContent = `${res.owner.name}`
  headerTitle.textContent = `${res.name}`
})
