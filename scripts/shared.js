import ProcessData from "/scripts/ProcessData.js";

const cardContainer = document.querySelector(".card-container");

async function getData() {
  const processor = new ProcessData();
  return await processor.fetchFolderData();
}

async function applyHeaderData() {
  const folderData = await getData();

  const avatarTag = document.querySelector(".avatar-tag");
  const avatar = document.querySelector(".avatar");
  const headerTitle = document.querySelector(".header-title");

  avatarTag.textContent = "@" + folderData.owner.name;
  avatar.setAttribute("src", folderData.owner.profileImageSource);
  headerTitle.textContent = folderData.name;
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
