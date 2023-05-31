import Footer from "@/components/Footer/footer";
import Gnb from "@/components/Gnb/gnb";
import getUserData from "@/lib/getUserData";

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
