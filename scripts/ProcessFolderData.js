export default class ProcessFolderData {
  constructor() {
    this.data = this.fetchData();
  }

  // 1. 데이터 불러오기(data를 리턴)
  async fetchData() {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/sample/folder"
    );
    const result = await response.text();
    const { data } = await JSON.parse(result);
    const { folder } = data;
    return folder; // promise
  }
}
