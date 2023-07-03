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

  // TODO: 문제 상황: 홈페이지((main)/page.tsx)에서 api 요청이 설정한 next.js api 대로 안가고,
  // 페이지 GET 요청이 가서 html이 요청으로 옴
  // folder 페이지에서 폴더 칩을 눌러 페이지가 refresh 되면 next.js api 대로 요청이 가서 user가 잘 받아와짐
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
