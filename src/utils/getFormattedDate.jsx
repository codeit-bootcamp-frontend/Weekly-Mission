function getFormattedDate(dateItem) {
  const date = new Date(dateItem);
  return date.toLocaleDateString("ko");
}

export default getFormattedDate;
