import "@/styles/globals.scss";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import PageContainer from "./components/PageContainer/PageContainer";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
