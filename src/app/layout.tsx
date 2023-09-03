import DefaultLayout from "@/layouts/DefaultLayout";
import { Metadata } from "next";
import "@/styles/global.css";
import AddLinkBarBottomContextProvider from "@/contexts/AddLinkBarBottomContextProvider";
import { pretendard } from "@/utils/localFont";

export const metadata: Metadata = {
  title: "Linkbrary",
  description: "아 그 블로그 뭐더라",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <AddLinkBarBottomContextProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </AddLinkBarBottomContextProvider>
      </body>
    </html>
  );
}
