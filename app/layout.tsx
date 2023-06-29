import { META_ROOT } from "@/app/_meta";
import { CurrentUserProvider } from "@/hooks/useCurrentUserContext";
import { pretendard } from "@/public/fonts/localFont";
import "@/styles/global.scss";
import { Children } from "@/types";

export const metadata = META_ROOT;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="ko" className={pretendard.className}>
      <head>
        <script defer src="https://developers.kakao.com/sdk/js/kakao.js" />
      </head>
      <body>
        <CurrentUserProvider>
          {children}
          <div id="modal-portal" />
        </CurrentUserProvider>
      </body>
    </html>
  );
}
