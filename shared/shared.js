import { fetchFolderData } from "../api/folder.api.js";

document.addEventListener("DOMContentLoaded", () => {
  const folderInfoComponent = document.querySelector("folder-info-component");
  fetchFolderData().then((data) => {
    const {
      owner: { name: ownerName, profileImageSource: profileSrc },
      name: folderName,
    } = data.folder;
    folderInfoComponent.prop = { profileSrc, ownerName, folderName };
  });
});
