import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const arial = localFont({
  src: "./Arial.woff2",
  display: "swap",
});
