export default class ProcessData {
  // 1. folder data fetch
  async fetchFolderData() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const result = await response.text();
    const { data } = await JSON.parse(result);
    const { folder } = data;
    return folder; // promise
  }

  // 2. user data fetch
  async fetchUserData() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const result = await response.text();
    const { data } = await JSON.parse(result);
    return data; // promise
  }
}
