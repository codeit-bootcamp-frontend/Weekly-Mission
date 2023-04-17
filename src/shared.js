import { getFolderRequest } from "./service/axios/folderApi.js";
import { getUserRequest } from "./service/axios/userApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  const sendPropToElem = (elem, data) => {
    elem.prop = data;
  };

  const { data: folderData } = await getFolderRequest();
  const cardListProp = [...folderData.folder.links];

  const { data: userData } = await getUserRequest();
  const gnbProp = { userData };

  const cardListElem = document.querySelector("custom-link-card-list");
  const gnbElem = document.querySelector("custom-gnb");

  sendPropToElem(cardListElem, cardListProp);
  sendPropToElem(gnbElem, gnbProp);
});
