export default class ProcessData {
  async fetchFolderData() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const result = await response.text();
    const { data } = await JSON.parse(result);
    const { folder } = data;
    return folder;
  }

  async fetchUserData() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/user"
    );
    const result = await response.text();
    const { data } = await JSON.parse(result);
    return data;
  }
}
