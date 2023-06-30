import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  // process.env.NODE_ENV === "development"
  //   ? "http://localhost:3000/"
  //   : "https://bootcamp-api.codeit.kr/api",
  // timeout: 10000,
});

async function getFolders(userId) {
  try {
    const response = await instance.get(`/api/users/${userId}/folders`);
    const folders = await response.data;
    return folders;
  } catch (error) {
    console.log(error);
  }
}

// async function getFolders() {
//   try {
//     const response = await instance.get(`/api/folder`);
//     const folders = await response.data;
//     return folders;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function postFolder(value, userId) {
  try {
    const response = await instance.post(`/api/folders`, {
      userId,
      name: value,
    });
    const folders = await response.data;
    return folders;
  } catch (error) {
    console.log(error);
  }
}

// async function getFolderList(userId) {
//   try {
//     const response = await instance.get(`api/users/${userId}/folders`);
//     const { data } = response.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getUser(userId) {
  try {
    const response = await instance.get(`api/users/${userId}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

// async function getFolderList(userId) {
//   try {
//     const response = await instance.get(`api/users/${userId}/folders`);
//     const { data } = response.data;
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getLinks(userId, folderId) {
  try {
    const url = folderId
      ? `api/users/${userId}/links?folderId=${folderId}`
      : `api/users/${userId}/links`;

    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function postLink(url, userId, folderId) {
  try {
    const response = await instance.post(`/api/links`, {
      url,
      userId,
      folderId: folderId || null,
    });
    const link = await response.data;
    return link;
  } catch (error) {
    console.log(error);
  }
}

// export { getUser, getFolderList, getCardList };
export { getUser, getFolders, postFolder, getLinks, postLink };
