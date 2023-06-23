const calculatePassedTime = (
  createdTime: Date | null,
  currentTime: Date | null,
): string => {
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 31 * DAY;
  const YEAR = 12 * MONTH;

  if (!createdTime || !currentTime) return "";

  const timeDiff = currentTime.getTime() - createdTime.getTime();

  switch (true) {
    case timeDiff < 2 * MINUTE:
      return "1 minute ago";
    case timeDiff < HOUR:
      return `${Math.floor(timeDiff / MINUTE)} minutes ago`;
    case timeDiff < 2 * HOUR:
      return "1 hour ago";
    case timeDiff < DAY:
      return `${Math.floor(timeDiff / HOUR)} hours ago`;
    case timeDiff < 2 * DAY:
      return "1 day ago";
    case timeDiff < MONTH:
      return `${Math.floor(timeDiff / DAY)} days ago`;
    case timeDiff < 2 * MONTH:
      return "1 month ago";
    case timeDiff < YEAR:
      return `${Math.floor(timeDiff / MONTH)} months ago`;
    case timeDiff < 2 * YEAR:
      return "1 year ago";
    default:
      return `${Math.floor(timeDiff / YEAR)} years ago`;
  }
};

export default calculatePassedTime;
