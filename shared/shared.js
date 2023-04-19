import { fetchFolderData } from "../api/folder.api.js";
import { fetchUserData } from "../api/user.api.js";

document.addEventListener("DOMContentLoaded", () => {
  const folderInfoComponent = document.querySelector("folder-info-component");
  const cardListComponent = document.querySelector("card-list-component");
  fetchFolderData()
    .then((data) => {
      const {
        owner: { name: ownerName, profileImageSource: profileSrc },
        name: folderName,
        links,
      } = data.folder;
      folderInfoComponent.prop = { profileSrc, ownerName, folderName };
      cardListComponent.prop = links;
    })
    .catch((err) => {
      console.error(err);
    });
  //gnb user data 가져오기:로그인 기능 구현 후 수정
  const gnbComponent = document.querySelector("gnb-header");
  fetchUserData()
    .then((data) => {
      const { profileImageSource: profileSrc, email } = data;
      gnbComponent.prop = { profileSrc, email };
    })
    .catch((err) => {
      console.error(err);
    });
});
