import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import { VisibleGNBProvider } from "@/hooks/useVisibleGNBContext";
import { getUser } from "@/utils/api";
import checkLoginStatus from "@/utils/checkLoginStatus";
import checkUserID from "@/utils/checkUserID";
import { Children } from "@/types";

export default async function MainLayout({ children }: Children) {
  const isLogged = checkLoginStatus();
  const userID = checkUserID();

  let user;
  user = isLogged ? await getUser(userID) : null;

  return (
    <>
      <VisibleGNBProvider>
        <GNB isLogged={isLogged} user={user} />
        {children}
      </VisibleGNBProvider>
      <Footer />
    </>
  );
}
