import ProcessData from "/scripts/ProcessData.js";

const cardContainer = document.querySelector(".card-container");

async function getData() {
  const processor = new ProcessData();
  return await processor.fetchFolderData();
}

async function applyHeaderData() {
  const folderData = await getData();

  const ownerName = document.querySelector(".owner-name");
  const imgOwner = document.querySelector(".img-owner");
  const folderName = document.querySelector(".folder-name");

  ownerName.textContent = "@" + folderData.owner.name;
  imgOwner.setAttribute("src", folderData.owner.profileImageSource);
  folderName.textContent = folderData.name;
}
applyHeaderData();

async function createCard() {
  const folderData = await getData();
  for (let i = 0; i < folderData.count; i++) {
    const card = document.createElement("custom-card");
    cardContainer.appendChild(card);
  }
}
createCard();
