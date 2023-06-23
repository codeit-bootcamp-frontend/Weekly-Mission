const changeDateFormat = (time: Date | null): string => {
  if (!time) return "";
  return Intl.DateTimeFormat("kr").format(time);
};

export default changeDateFormat;
