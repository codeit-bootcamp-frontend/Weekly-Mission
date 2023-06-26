import Gnb from "@/components/Gnb/Gnb";
import Footer from "@/components/Footer/Footer";
import "../styles/global.css";
import { getUser } from "@/api/instance";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import { getServerSession } from "next-auth";

export default async function RootLayout({ children }) {
  // let session = await getServerSession(authOptions);

  const USERID = "64992eec930d7d6257c06f19";
  let user = await getUser(USERID);
  // let user = session ? await getUser() : null;

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
