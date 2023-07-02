import Footer from "@/components/Footer";
import GNB from "@/components/GNB/GNB";
import { InViewGNBProvider } from "@/hooks/useInViewGNBContext";
import { Children } from "@/types";
import { getUser } from "@/utils/api";
import checkLoginStatus from "@/utils/checkLoginStatus";

export default async function MainLayout({ children }: Children) {
  const isLogged = checkLoginStatus();
  // TODO: 추후 userId를 불러오는 것이 클라이언트 컴포넌트에서만 가능하다면 GNB 안에서 처리해야 함
  const userId = "649fc0074843a7796910d6f7";

  const user = isLogged ? await getUser(userId) : null;

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
