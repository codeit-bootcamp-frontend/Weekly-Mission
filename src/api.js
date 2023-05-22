export async function getData(option) {
  const response = fetch(`https://bootcamp-api.codeit.kr/api/sample/${option}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = (await response).json();
  return body;
}
