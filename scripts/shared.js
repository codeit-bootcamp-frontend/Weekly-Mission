import ProcessFolderData from "/scripts/ProcessFolderData.js";

const cardContainer = document.querySelector(".card-container");

// 2. card 갯수만큼 card 반복 생성
async function createCard() {
  const processorData = await new ProcessFolderData();
  const folderData = await processorData.data;
  console.log(folderData.count);

  for (let i = 0; i < folderData.count; i++) {
    const card = document.createElement("custom-card");
    cardContainer.appendChild(card);
  }
}

createCard();
