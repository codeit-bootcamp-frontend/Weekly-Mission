const baseURL = "https://bootcamp-api.codeit.kr/api";

async function fetchUser(id) {
  const res = await fetch(`${baseURL}/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getUser(id) {
  const resObj = await fetchUser(id);
  const { data } = resObj;
  return data ? data[0] : null;
}

async function fetchFolder(userID, folderID) {
  const url = folderID
    ? `${baseURL}/users/${userID}/folders/${folderID}`
    : `${baseURL}/users/${userID}/folders`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getFolder(userID, folderID) {
  const { data } = await fetchFolder(userID, folderID);
  return data;
}

async function fetchLink(userID, folderID) {
  const url = folderID
    ? `${baseURL}/users/${userID}/links?folderId=${folderID}`
    : `${baseURL}/users/${userID}/links`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getLink(userID, folderID) {
  const { distinctData: data } = await fetchLink(userID, folderID);
  return data;
}

export { getUser, getFolder, getLink };
