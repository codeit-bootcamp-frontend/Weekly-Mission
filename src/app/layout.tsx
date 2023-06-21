import "@/styles/globals.scss";
import Layout from "@/app/components/Layout/Layout";
import Providers from "@/app/components/Providers/Providers";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "Linkbrary",
  description: "세상의 모든 정보를 한 곳에",
  charSet: "UTF-8",
  viewport: "width=device-width, initial-scale=1",
  links: [
    {
      rel: "preload",
      as: "font",
      type: "font/woff2",
      crossOrigin: "",
      href: "https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Regular.woff2",
    },
    {
      rel: "preload",
      as: "font",
      type: "font/woff2",
      crossOrigin: "",
      href: "https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Bold.woff2",
    },
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Layout session={session}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
