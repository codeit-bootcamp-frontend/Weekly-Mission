import Footer from "@/components/Footer/Footer";

export const revalidate = 3600;

export default async function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
