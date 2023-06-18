import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import { VisibleGNBProvider } from "@/hooks/useVisibleGNBContext";
import { Children } from "@/types";
import { getUser } from "@/utils/api";
import checkLoginStatus from "@/utils/checkLoginStatus";
import checkUserID from "@/utils/checkUserID";

export default async function MainLayout({ children }: Children) {
  const isLogged = checkLoginStatus();
  const userID = checkUserID();

  const user = isLogged ? await getUser(userID) : null;

  return (
    <>
      <VisibleGNBProvider>
        <GNB user={user} />
        {children}
      </VisibleGNBProvider>
      <Footer />
    </>
  );
}
