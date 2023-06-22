import { redirect } from "next/navigation";

import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import QueryHydrate from "@/components/QueryHydrate/QueryHydrate";
import getQueryClient from "@/lib/tanstack/getQueryClient";
import { getUserQueryFn } from "@/lib/tanstack/queryFns/foldersQueryFns";
import { dehydrate } from "@tanstack/react-query";
import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]/route";

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
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const userId = session.user.id as number;
  params.userId = userId;

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["user"], () => getUserQueryFn(userId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <QueryHydrate state={dehydratedState}>
        <Gnb userId={userId} />
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
