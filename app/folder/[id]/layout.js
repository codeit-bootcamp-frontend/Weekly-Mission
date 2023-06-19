import Footer from "@/components/Footer";
import GNB from "@/components/GNB";
import getUserData from "@/api/getUserData";

export default async function FolderLayout({ children }) {
  const userData = await getUserData();
  const { id: userId, name: userName, email, profileImageSource } = userData;

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={profileImageSource} />
      {children}
      <Footer />
    </>
  );
}
