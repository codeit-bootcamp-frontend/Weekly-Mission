import Gnb from "@/components/Gnb/Gnb";
import Footer from "@/components/Footer/Footer";
import "../styles/global.css";
import { getUser } from "../api/axios";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);

  const USERID = "7";
  let user = session ? await getUser(USERID) : null;

  return (
    <html lang="ko">
      <body>
        <Gnb user={user}></Gnb>
        {children}
        <Footer />
      </body>
    </html>
  );
}
