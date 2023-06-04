import React from "react";

import { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://weekly-mission-git-henry-react-week11-codeit-bootcamp.vercel.app"
  ),
  title: "Codeit Weekly Mission",
  description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요.",
  openGraph: {
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요.",
    url: "https://weekly-mission-git-henry-react-week11-codeit-bootcamp.vercel.app",
    siteName: "linkbrary",
    images: {
      url: "https://i.ibb.co/DpfKPC9/img-info.png",
      width: 1168,
      height: 561,
      alt: "linkbrary",
    },
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: {
      url: "https://i.ibb.co/DpfKPC9/img-info.png",
      width: 1168,
      height: 561,
      alt: "linkbrary",
    },
    title: "Linkbrary",
    description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요.",
  },
};

const pretendard = localFont({
  variable: "--font-pretendard",
  src: [
    {
      path: "./fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Pretendard-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>{children}</body>
    </html>
  );
}
