import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import QueryHydrate from "@/components/QueryHydrate/QueryHydrate";
import getQueryClient from "@/lib/tanstack/getQueryClient";
import { getUserQueryFn } from "@/lib/tanstack/queryFns/foldersQueryFns";
import { dehydrate } from "@tanstack/react-query";

export const revalidate = 3600;

export default async function FolderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], () => getUserQueryFn(1));
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <QueryHydrate state={dehydratedState}>
        <Gnb />
        {children}
        <Footer />
        <div id="add-portal"></div>
        <div id="delete-link-portal"></div>
        <div id="add-folder-portal"></div>
        <div id="share-folder-portal"></div>
        <div id="edit-folder-portal"></div>
        <div id="delete-folder-portal"></div>
      </QueryHydrate>
    </>
  );
}
