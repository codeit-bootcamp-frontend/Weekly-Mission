import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import { getUser } from "@/utils/axiosAPI";
import checkLoginStatus from "@/utils/checkLoginStatus";

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
