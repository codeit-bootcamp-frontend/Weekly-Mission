export const timeForToday = (value) => {
  const today = new Date();
  const timeValue = new Date(value);

  // minute 차이
  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  console.log(betweenTime, today, timeValue);
  if (betweenTime < 2) return '1 minute ago';
  else if (betweenTime <= 59) {
    return `${betweenTime} minutes ago`;
  }

  // hour 차이
  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour <= 1) {
    return `${betweenTimeHour} hour ago`;
  } else if (betweenTimeHour <= 23) {
    return `${betweenTimeHour} hours ago`;
  }

  // day 차이
  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay <= 1) {
    return `1 day ago`;
  } else if (betweenTimeDay <= 30) {
    return `${betweenTimeDay} days ago`;
  }

  // month 차이
  const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);
  if (betweenTimeMonth <= 1) {
    return `1 month ago`;
  } else if (betweenTimeMonth <= 11) {
    return `${betweenTimeMonth} months ago`;
  } else if (betweenTimeMonth <= 12) {
    return `${betweenTimeMonth} year ago`;
  } else {
    return `${Math.floor(betweenTimeMonth / 12)} years ago`;
  }
};
