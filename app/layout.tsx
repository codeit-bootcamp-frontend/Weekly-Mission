import "@/styles/global.scss";
import { Children } from "@/types";

export const metadata = {
  title: "Linkbrary",
};

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="ko">
      <body>
        {children}
        <div id="modal-portal" />
      </body>
    </html>
  );
}
