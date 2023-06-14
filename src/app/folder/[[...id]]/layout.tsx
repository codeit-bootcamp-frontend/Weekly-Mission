import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Page from "./page";
import MainContent from "./MainContent/MainContent";

const layout = async ({ params }: { params: { id?: string[] } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <Page params={params}>
        <MainContent
          userId={session.user.id!}
          folderId={params.id ? params.id[0] : ""}
        />
      </Page>
    </>
  );
};

export default layout;
