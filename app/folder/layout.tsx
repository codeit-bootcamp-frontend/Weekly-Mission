import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import getCurrentUser from "@/lib/getCurrentUser";

export const revalidate = 3600;

export default async function FolderLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    userId?: number;
  };
}) {
  const userProfile = await getCurrentUser();

  params.userId = userProfile.id;

  return (
    <>
      <Gnb user={userProfile} />
      {children}
      <Footer />
      <div id="add-portal"></div>
      <div id="delete-link-portal"></div>
      <div id="add-folder-portal"></div>
      <div id="share-folder-portal"></div>
      <div id="edit-folder-portal"></div>
      <div id="delete-folder-portal"></div>
    </>
  );
}
