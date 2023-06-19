function calcElapsedTime(timestamp) {
  let createdTime = new Date(timestamp);
  let currentTime = new Date();
  let diffMSec = currentTime.getTime() - createdTime.getTime();
  let diffMin = Math.round(diffMSec / (60 * 1000));
  if (diffMin < 60) {
    return diffMin < 2 ? `1 minute ago` : `${diffMin} minutes ago`;
  } else if (diffMin < 24 * 60) {
    return diffMin === 60
      ? `1 hour ago`
      : `${Math.floor(diffMin / 60)} hours ago`;
  } else if (diffMin < 24 * 60 * 31) {
    return diffMin < 24 * 60 * 2
      ? `1 day ago`
      : `${Math.floor(diffMin / 60 / 24)} days ago`;
  } else if (diffMin < 24 * 60 * 31 * 12) {
    return diffMin < 24 * 60 * 31 * 2
      ? `1 month ago`
      : `${Math.floor(diffMin / 60 / 24 / 31)} months ago`;
  } else {
    return diffMin < 24 * 60 * 31 * 12 * 2
      ? `1 year ago`
      : `${Math.floor(diffMin / 60 / 24 / 31 / 12)} years ago`;
  }
}

export default calcElapsedTime;
