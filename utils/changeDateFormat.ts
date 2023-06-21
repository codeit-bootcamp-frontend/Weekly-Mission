const changeDateFormat = (time: string): string => {
  return Intl.DateTimeFormat("kr").format(new Date(time));
};

export default changeDateFormat;
