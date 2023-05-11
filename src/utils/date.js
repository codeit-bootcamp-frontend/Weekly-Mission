export function getTimeDiffFormat(createdAt) {
  if (!createdAt) {
    return "10 minute ago";
  } else {
    const year = createdAt.slice(0, 4);
    const month =
      createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7);
    const day = createdAt.slice(8, 10);

    const now = new Date();
    const createdDate = new Date(year, month - "1", day);

    const diffMSec = now.getTime() - createdDate.getTime();
    const diffMin = diffMSec / (60 * 1000);
    const diffHour = diffMin / 60;
    const diffDay = diffHour / 24;
    const diffMonth = diffDay / 30;
    const diffYear = diffMonth / 12;

    if (diffYear >= 2) {
      return `${Math.floor(diffYear)} years ago`;
    } else if (diffYear >= 1) {
      return `1 year ago`;
    } else if (diffMonth >= 2) {
      return `${Math.floor(diffMonth)} months ago`;
    } else if (diffMonth >= 1) {
      return `1 month ago`;
    } else if (diffDay >= 2) {
      return `${Math.floor(diffDay)} days ago`;
    } else if (diffDay >= 1) {
      return `1 day ago`;
    } else if (diffHour >= 2) {
      return `${Math.floor(diffHour)} hours ago`;
    } else if (diffHour >= 1) {
      return `1 hour ago`;
    } else if (diffMin >= 2) {
      return `${Math.floor(diffMin)} minutes ago`;
    } else {
      return `1 minute ago`;
    }
  }
}

export function getDateFormat(createdAt) {
  if (!createdAt) {
    return "2023. 3. 15";
  } else {
    const year = createdAt.slice(0, 4);
    const month =
      createdAt[5] === "0" ? createdAt.slice(6, 7) : createdAt.slice(5, 7);
    const day =
      createdAt[8] === "0" ? createdAt.slice(9, 10) : createdAt.slice(8, 10);
    return `${year}. ${month}. ${day}`;
  }
}
