import Footer from "@/components/Footer";
import GNB from "@/components/GNB";
import { getUser } from "@/api/request/request-user";
import getUserId from "@/data/getUserId";

export default async function FolderLayout({ children }) {
  const userId = getUserId();
  const userData = await getUser(userId);
  const { email, image_source } = userData[0];

  return (
    <>
      <GNB userEmail={email} userProfileImageSorce={image_source} />
      {children}
      <Footer />
    </>
  );
}
