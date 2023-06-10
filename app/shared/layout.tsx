import Footer from "@/components/Footer/Footer";
import Gnb from "@/components/Gnb/Gnb";
import QueryHydrate from "@/components/QueryHydrate/QueryHydrate";
import getQueryClient from "@/lib/tanstack/getQueryClient";
import { getUserQueryFn } from "@/lib/tanstack/queryFns/foldersQueryFns";
import { dehydrate } from "@tanstack/react-query";

export const revalidate = 3600;

export default async function SharedLayout({
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
        <Gnb userId={1} />
        {children}
        <Footer />
      </QueryHydrate>
    </>
  );
}
