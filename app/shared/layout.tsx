import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import getUserData from "lib/getUserData";

export default async function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserData();
  return (
    <>
      <Gnb user={user} />
      {children}
      <Footer />
    </>
  );
}
