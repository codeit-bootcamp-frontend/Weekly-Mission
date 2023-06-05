export default function getDateFormat(prevDate) {
  const date = new Date(prevDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}. ${month}. ${day}`;
}
