import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import "@/styles/global.scss";
import { getUser } from "@/utils/api";
import checkLoginStatus from "@/utils/checkLoginStatus";

export default async function RootLayout({ children }) {
  const isLogged = checkLoginStatus();

  let user;
  user = isLogged ? await getUser() : null;

  return (
    <html lang="ko">
      <body>
        <GNB isLogged={isLogged} user={user} />
        {children}
        <Footer />
        <div id="modal-portal" />
      </body>
    </html>
  );
}
