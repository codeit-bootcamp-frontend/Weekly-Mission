import getUserData from "/data/user.js";
import getFolderData from "/data/folder.js";

async function renderGNB() {
  try {
    const { data } = await getUserData();
    const gnb = document.querySelector("custom-gnb");
    gnb.user = data;
  } catch {
    console.log("user data가 존재하지 않습니다.");
  }
}

async function renderHeader() {
  try {
    const { data } = await getFolderData();
    const { folder } = data;
    const { name } = folder;
    const { id, name: ownerName, profileImageSource } = folder.owner;

    const header = document.querySelector("header");
    header.dataset.pid = id;

    const headerTitle = document.querySelector(".header-title");
    headerTitle.textContent = name;

    const profileImage = document.querySelector(".user-avatar");
    profileImage.src = profileImageSource;

    const profileName = document.querySelector(".user-nickname");
    profileName.textContent = `@${ownerName}`;
  } catch {
    console.log("folder의 데이터가 존재하지 않습니다.");
  }
}

//호출
renderGNB();
renderHeader();
