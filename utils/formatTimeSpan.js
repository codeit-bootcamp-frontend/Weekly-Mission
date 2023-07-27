export function formatTimeSpan(timeDiffMinutes) {
  if (Math.round(timeDiffMinutes) < 2) {
    return "1 minute ago";
  } else if (Math.round(timeDiffMinutes) <= 59) {
    return `${Math.round(timeDiffMinutes)} minutes ago`;
  } else if (Math.round(timeDiffMinutes) <= 119) {
    return "1 hour ago";
  } else if (Math.round(timeDiffMinutes / 60) <= 23) {
    return `${Math.round(timeDiffMinutes / 60)} hours ago`;
  } else if (Math.round(timeDiffMinutes / 60) <= 47) {
    return "1 day ago";
  } else if (Math.round(timeDiffMinutes / 60 / 24) <= 30) {
    return `${Math.round(timeDiffMinutes / 60 / 24)} days ago`;
  } else if (Math.round(timeDiffMinutes / 60 / 24) <= 61) {
    return "1 month ago";
  } else if (Math.round(timeDiffMinutes / 60 / 24 / 31) <= 11) {
    return `${Math.round(timeDiffMinutes / 60 / 24 / 31)} months ago`;
  } else {
    return `${Math.floor(timeDiffMinutes / 60 / 24 / 31 / 12)} years ago`;
  }
}
