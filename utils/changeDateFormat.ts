const changeDateFormat = (time: Date): string => {
  return Intl.DateTimeFormat("kr").format(time);
};

export default changeDateFormat;
