import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import { InViewGNBProvider } from "@/hooks/useInViewGNBContext";
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
      <InViewGNBProvider>
        <GNB user={user} />
        {children}
      </InViewGNBProvider>
      <Footer />
    </>
  );
}
