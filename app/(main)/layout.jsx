import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import checkLoginStatus from "@/utils/checkLoginStatus";
import { getUser } from "@/utils/fetchAPI";

export default async function MainLayout({ children }) {
  const isLogged = checkLoginStatus();
  const userID = 4;

  let user;
  user = isLogged ? await getUser(userID) : null;

  return (
    <>
      <GNB isLogged={isLogged} user={user} />
      {children}
      <Footer />
    </>
  );
}
