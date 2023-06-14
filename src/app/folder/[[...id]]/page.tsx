import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MainContent from "./MainContent/MainContent";
import Main from "./Main";

const layout = async ({ params }: { params: { id?: string[] } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <Main params={params}>
        <MainContent
          userId={session.user.id!}
          folderId={params.id ? params.id[0] : ""}
        />
      </Main>
    </>
  );
};

export default layout;
