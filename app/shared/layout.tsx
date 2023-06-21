import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import getCurrentUser from "@/lib/getCurrentUser";

export const revalidate = 3600;

export default async function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userProfile = await getCurrentUser();
  return (
    <>
      <Gnb user={userProfile} />
      {children}
      <Footer />
    </>
  );
}
