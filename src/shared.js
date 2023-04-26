import { getFolderRequest } from "./service/axios/folderApi.js";
import { getUserRequest } from "./service/axios/userApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  const sendPropToElem = (elem, data) => {
    elem.prop = data;
  };

  const getCardListProp = (dataList) => {
    return dataList.map((data) => {
      return {
        id: data.id,
        href: data.url,
        thumbnailSrc: data.imageSource ?? "/images/default-thumbnail.svg",
        isLiked: false,
        metadata: {
          description: data.description,
          createdDate: data.createdAt,
        },
      };
    });
  };

  const getFolderInfoContainerProp = (folder) => {
    return {
      folderName: folder.name,
      ownerName: folder.owner.name,
      profileImgSrc: folder.owner.profileImageSource ?? "/images/avatar.png",
    };
  };

  const getGnbProp = (userData) => {
    return {
      isLoggedIn: true,
      profileImgSrc: userData.profileImageSource ?? "/images/profile_img.png",
      username: userData.name,
      email: userData.email,
    };
  };

  const { data: folderData } = await getFolderRequest();
  const cardListProp = getCardListProp(folderData.folder.links);
  const folderInfoContainerProp = getFolderInfoContainerProp(folderData.folder);

  const { data: userData } = await getUserRequest();
  const gnbProp = getGnbProp(userData);

  const cardListElem = document.querySelector("custom-link-card-list");
  const gnbElem = document.querySelector("custom-gnb");
  const folderInfoContainerElem = document.querySelector(
    "custom-folder-info-container"
  );

  sendPropToElem(cardListElem, cardListProp);
  sendPropToElem(gnbElem, gnbProp);
  sendPropToElem(folderInfoContainerElem, folderInfoContainerProp);
});
