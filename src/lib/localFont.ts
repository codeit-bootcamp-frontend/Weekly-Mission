import localFont from "next/font/local";

export const pretendard = localFont({
  variable: "--font-pretendard",
  src: [
    {
      path: "../fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const Arial = localFont({
  variable: "--font-arial",
  src: [
    {
      path: "../fonts/Arial.woff",
    },
  ],
});
