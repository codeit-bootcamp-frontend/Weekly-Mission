import { pretendard } from "@/styles/fonts/localFont";
import "@/styles/global.scss";
import { Children } from "@/types";

export const metadata = {
  title: "Linkbrary",
};

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        {children}
        <div id="modal-portal" />
      </body>
    </html>
  );
}
