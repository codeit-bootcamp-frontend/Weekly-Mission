/* eslint-disable prettier/prettier */

type TBeautifyTimeDiff = (minutes: number) => string;

type TBeautifyDate = (createAt: string) => {
  beautifiedDate: string;
  beautifiedTimeDiff: string;
};

/**
 * @example createdAt 데이터 기준으로 현재 Date와 차이가
 * - 2분 미만은 “1 minute ago”
 * - 59분 이하는 “OO minutes ago”
 * - 60분 이상은 “1 hour ago”
 * - 23시간 이하는 “OO hours ago”
 * - 24시간 이상은 “1 day ago”
 * - 30일 이하는 “OO days ago”
 * - 31일 이상은 “1 month ago”
 * - 11달 이하는 “OO months ago”
 * - 12달 이상은 “1 year ago”
 * - OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”
 */
const beautifyTimeDiff: TBeautifyTimeDiff = (minutes) => {
  const r = (t: number): number => Math.round(t);

  switch (true) {
    case r(minutes) < 2:
      return "1 minute ago";
    case r(minutes) <= 59:
      return `${r(minutes)} minutes ago`;
    case r(minutes) <= 119:
      return "1 hour ago";
    case r(minutes / 60) <= 23:
      return `${r(minutes / 60)} hours ago`;
    case r(minutes / 60) <= 47:
      return "1 day ago";
    case r(minutes / 60 / 24) <= 30:
      return `${r(minutes / 60 / 24)} days ago`;
    case r(minutes / 60 / 24) <= 61:
      return "1 month ago";
    case r(minutes / 60 / 24 / 31) <= 11:
      return `${r(minutes / 60 / 24 / 31)} months ago`;
    default:
      return `${Math.floor(minutes / 60 / 24 / 31 / 12)} years ago`;
  }
};

/**
 * yyyy.mm.dd 형식으로 반환하는 함수
 */
const beautifyDate: TBeautifyDate = (createdAt) => {
  const creationDate: string = new Date(createdAt).toISOString();
  const currentDate: string = new Date().toISOString();
  const timeDiffInMinutes =
    Math.abs(Number(currentDate) - Number(creationDate)) / 1000 / 60;

  const beautifiedTimeDiff = beautifyTimeDiff(timeDiffInMinutes);

  const [yyyy, mm, dd] = creationDate.split("T")[0].split("-");
  const beautifiedDate = `${yyyy}. ${mm[0] === "0" ? mm.slice(1) : mm}. ${dd}`;

  return { beautifiedDate, beautifiedTimeDiff };
};

export default beautifyDate;
