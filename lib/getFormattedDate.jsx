const getFormattedDate = (dateItem) => {
  if (dateItem) {
    const date = new Date(dateItem);
    return date.toLocaleDateString('ko');
  }

  return '';
};

export default getFormattedDate;
