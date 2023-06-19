const dateTimeFormat = new Intl.DateTimeFormat("ko-KR");

function formatCurrentDate(timestamp) {
  return dateTimeFormat.format(new Date(timestamp)).slice(0, -1);
}

export default formatCurrentDate;
