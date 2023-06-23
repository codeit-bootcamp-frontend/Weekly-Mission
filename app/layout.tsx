import { META_ROOT } from "@/app/_meta";
import { pretendard } from "@/styles/fonts/localFont";
import "@/styles/global.scss";
import { Children } from "@/types";

export const metadata = META_ROOT;

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
