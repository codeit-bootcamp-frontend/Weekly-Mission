import { META_ROOT } from "@/app/_meta";
import { UserIdProvider } from "@/hooks/useUserContext";
import { pretendard } from "@/styles/fonts/localFont";
import "@/styles/global.scss";
import { Children } from "@/types";

export const metadata = META_ROOT;

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <UserIdProvider>
          {children}
          <div id="modal-portal" />
        </UserIdProvider>
      </body>
    </html>
  );
}
