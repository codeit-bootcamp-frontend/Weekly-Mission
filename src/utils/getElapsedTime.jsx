function getElapsedTime(dateItem) {
  if (dateItem === undefined) {
    return "";
  }

  const MS_PER_MINUTE = 1000 * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;
  const MS_PER_MONTH = MS_PER_DAY * 30;
  const MS_PER_YEAR = MS_PER_DAY * 365;

  const createdDate = new Date(dateItem);
  const nowDate = new Date();
  const timeDiff = nowDate - createdDate;

  let elapsedTime = "";

  switch (true) {
    case timeDiff < 2 * MS_PER_MINUTE:
      elapsedTime = `1 minute ago`;
      break;
    case timeDiff < MS_PER_HOUR:
      const minuteDiff = Math.floor(timeDiff / MS_PER_MINUTE);
      elapsedTime = `${minuteDiff} minutes ago`;
      break;
    case timeDiff < 2 * MS_PER_HOUR:
      elapsedTime = `1 hour ago`;
      break;
    case timeDiff < MS_PER_DAY:
      const hourDiff = Math.floor(timeDiff / MS_PER_HOUR);
      elapsedTime = `${hourDiff} hours ago`;
      break;
    case timeDiff < 2 * MS_PER_DAY:
      elapsedTime = `1 day ago`;
      break;
    case timeDiff < MS_PER_MONTH:
      const dayDiff = Math.floor(timeDiff / MS_PER_DAY);
      elapsedTime = `${dayDiff} days ago`;
      break;
    case timeDiff < 2 * MS_PER_MONTH:
      elapsedTime = `1 month ago`;
      break;
    case timeDiff < MS_PER_YEAR:
      const monthDiff = Math.floor(timeDiff / MS_PER_MONTH);
      elapsedTime = `${monthDiff} months ago`;
      break;
    case timeDiff < 2 * MS_PER_YEAR:
      elapsedTime = `1 year ago`;
      break;
    default:
      const yearDiff = Math.floor(timeDiff / MS_PER_YEAR);
      elapsedTime = `${yearDiff} years ago`;
      break;
  }

  return elapsedTime;
}

export default getElapsedTime;
