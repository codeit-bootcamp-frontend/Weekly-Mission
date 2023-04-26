import { getFolderData } from "./data.js";

// 1. 배너 안에 들어갈 데이터 렌더
async function renderBanner() {
  const folderdata = await getFolderData();
  const userProfileImage = document.querySelector(".user-profile-image");
  const userName = document.querySelector(".user-name");
  const bannerTitle = document.querySelector(".banner-title");
  userName.textContent = folderdata.owner.name;
  bannerTitle.textContent = folderdata.name;
  userProfileImage.setAttribute('src', folderdata.owner.profileImageSource)
}
renderBanner();

// 2. 카드 컴포넌트 데이터 개수만큼 렌더
async function renderCard() {
  const cardContainer = document.querySelector(".card-container");
  const folderData = await getFolderData();
  for (let i = 0; i < folderData.count; i++) {
    const cardComponent = document.createElement("card-component");
    cardContainer.appendChild(cardComponent);
  }
}
renderCard();
