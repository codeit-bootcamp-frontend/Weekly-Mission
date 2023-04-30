function getFormattedDate(dateItem) {
  const date = new Date(dateItem);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}. ${month < 10 ? "0" : ""}${month}. ${
    day < 10 ? "0" : ""
  }${day}.`;
}

export default getFormattedDate;
