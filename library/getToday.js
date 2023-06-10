// YYYY.MM.DD 작성 함수

export function getToday(data) {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  return `${year}.${month}.${day}`;
}
