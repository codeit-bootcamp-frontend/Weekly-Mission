import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MainContent from "./MainContent/MainContent";
import Main from "./Main";
import { getFoldersByUserId } from "@/lib/api/folderApi";
import { Folder } from "@/app/types/types";

export const fetchCache = "force-no-store";

const getFolderList = async (userId: number) => {
  const res = await getFoldersByUserId(String(userId));
  return res.data as Folder[];
};

const Page = async ({ params }: { params: { id?: string[] } }) => {
  const session = await getServerSession(authOptions);
  let folderList;
  if (!session) {
    redirect("/signin");
  } else {
    folderList = await getFolderList(session.user.id);
  }
  return (
    <>
      <Main>
        <MainContent
          userId={session.user.id}
          params={params}
          folderList={folderList ?? []}
        />
      </Main>
    </>
  );
};

export default Page;
