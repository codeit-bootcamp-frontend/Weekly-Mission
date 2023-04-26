import { BASE_URL } from "./common.js";

const folderUrl = BASE_URL + "/api/sample/folder";
export async function fetchFolderData() {
  const response = await fetch(folderUrl);
  const { data } = await response.json();
  return data;
}
