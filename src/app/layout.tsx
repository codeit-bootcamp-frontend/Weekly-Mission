import DefaultLayout from "@/layouts/DefaultLayout";
import { Metadata } from "next";
import "@/styles/global.css";

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
    <html lang="ko">
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
