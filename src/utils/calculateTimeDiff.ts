export default function calculateTimeDiff(dateString: string): string {
  const updatedDate = new Date(dateString);
  const today = Date.now();
  const timeDiff = today - updatedDate.getTime();

  const MINUTE = 60 * 1000;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 31;
  const YEAR = DAY * 365;

  const timeUnits = [
    { value: YEAR, label: "년" },
    { value: MONTH, label: "개월" },
    { value: DAY, label: "일" },
    { value: HOUR, label: "시간" },
    { value: MINUTE, label: "분" },
  ];

  for (let i = 0; i < timeUnits.length; i++) {
    const { value, label } = timeUnits[i];

    if (timeDiff < value) {
      continue;
    }

    const formattedTimeDiff = Math.floor(timeDiff / value);

    return (
      formattedTimeDiff +
      " " +
      label +
      (formattedTimeDiff > 1 ? " 전" : "") +
      ""
    );
  }
  return "";
}
