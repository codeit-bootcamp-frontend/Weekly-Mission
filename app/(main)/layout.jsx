import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import { getUser } from "@/utils/api";
import checkLoginStatus from "@/utils/checkLoginStatus";

export default async function MainLayout({ children }) {
  const isLogged = checkLoginStatus();

  let user;
  user = isLogged ? await getUser() : null;

  return (
    <>
      <GNB isLogged={isLogged} user={user} />
      {children}
      <Footer />
    </>
  );
}
