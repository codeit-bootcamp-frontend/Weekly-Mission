export default function getTimeDiffFormat(dateString: string) {
  const now = new Date();
  const createdDate = new Date(dateString);

  const diffMSec = now.getTime() - createdDate.getTime();
  const diffMin = diffMSec / (60 * 1000);
  const diffHour = diffMin / 60;
  const diffDay = diffHour / 24;
  const diffMonth = diffDay / 30;
  const diffYear = diffMonth / 12;

  let result = null as number;

  if (diffYear >= 1) {
    result = Math.floor(diffYear);
    if (result >= 2) {
      return `${result} years ago`;
    } else {
      return `${result} year ago`;
    }
  }

  if (diffMonth >= 1) {
    result = Math.floor(diffMonth);
    if (result >= 2) {
      return `${result} months ago`;
    } else {
      return `${result} month ago`;
    }
  }

  if (diffDay >= 1) {
    result = Math.floor(diffDay);
    if (result >= 2) {
      return `${result} days ago`;
    } else {
      return `${result} day ago`;
    }
  }

  if (diffHour >= 1) {
    result = Math.floor(diffHour);
    if (result >= 2) {
      return `${result} hours ago`;
    } else {
      return `${result} hour ago`;
    }
  }

  if (diffMin >= 1) {
    result = Math.floor(diffMin);
    if (result >= 2) {
      return `${result} minutes ago`;
    } else {
      return `${result} minute ago`;
    }
  }
}
